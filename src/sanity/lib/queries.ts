import { groq } from 'next-sanity'
import type { SITE_QUERY_RESULT } from '@/sanity/types'
import { sanityFetchLive } from './live'

/* fragments */

// @sanity-typegen-ignore
const LINK_QUERY = groq`
	...,
	type == 'internal' => {
		internal->{
			_type,
			title,
			'slug': select(
				metadata.slug.current == 'index' => '/',
				'/' + metadata.slug.current
			)
		}
	}
`

// @sanity-typegen-ignore
const NAVIGATION_QUERY = groq`
	items[]{
		${LINK_QUERY},
		defined(link) => { link{ ${LINK_QUERY} } },
		defined(links[]) => { links[]{ ${LINK_QUERY} } },
		_type == 'megamenu' => {
			defined(link) => { link{ ${LINK_QUERY} } },
			items[]{
				...,
				_type == 'link' => { ${LINK_QUERY} },
				_type == 'link.list' => {
					defined(link) => { link{ ${LINK_QUERY} } },
					links[]{ ${LINK_QUERY} }
				}
			}
		}
	}
`

// @sanity-typegen-ignore
const WORKSHOP_CARD_QUERY = groq`
	'_key': _id,
	'label': cardLabel,
	'tags': cardTags,
	'color': cardColor,
	'image': cardImage{
		...,
		asset->{
			...,
			metadata
		}
	},
	title,
	'description': cardDescription,
	'actionLabel': cardActionLabel,
	'meta': cardMeta,
	'link': select(
		defined(page) => {
			'type': 'internal',
			'internal': page->{
				_type,
				title,
				'slug': select(
					metadata.slug.current == 'index' => '/',
					'/' + metadata.slug.current
				)
			}
		}
	)
`

const SITE_QUERY = groq`*[_type == 'site'][0]{
	...,
	header->{ ${NAVIGATION_QUERY} },
	ctas[]{
		...,
		link{ ${LINK_QUERY} }
	},
	footer->{ ${NAVIGATION_QUERY} },
	social->{ ${NAVIGATION_QUERY} },
}`

export const GLOBAL_MODULE_PATH_QUERY = groq`
	string::startsWith($slug, path)
	&& select(
		defined(excludePaths) => count(excludePaths[string::startsWith($slug, @)]) == 0,
		true
	)
`

// @sanity-typegen-ignore
export const MODULES_QUERY = groq`
	...,
	ctas[]{
		...,
		link{ ${LINK_QUERY} }
	},
	_type == 'form-module' => {
		form->
	},
	_type == 'breadcrumbs' => {
		crumbs[]{ ${LINK_QUERY} }
	},
	_type == 'card-list' => {
		cards[]{
			...,
			ctas[]{
				...,
				link{ ${LINK_QUERY} }
			}
		}
	},
	_type == 'in-landing' => {
		cards[]{
			...,
			image{
				...,
				asset->{
					...,
					metadata
				}
			},
			link{ ${LINK_QUERY} }
		}
	},
	_type == 'in-mewe' => {
		cards[]{
			...,
			image{
				...,
				asset->{
					...,
					metadata
				}
			},
			link{ ${LINK_QUERY} }
		}
	},
	_type == 'in-workshop' => {
		workshop->
	},
	_type == 'in-workshop-collection' => {
		'workshops': select(
			defined(workshops[0]) => workshops[]->{
				${WORKSHOP_CARD_QUERY}
			},
			*[_type == 'workshop']|order(title asc){
				${WORKSHOP_CARD_QUERY}
			}
		)
	},
	_type == 'logo-list' => {
		logos[]{
			...,
			_type == 'reference' => @->
		}
	},
	_type == 'person-list' => {
		people[]{
			...,
			_type == 'reference' => @->
		}
	},
	_type == 'prose' => {
		content[]{
			...,
			_type == 'image' => {
				...,
				asset->{
					...,
					metadata
				}
			}
		},
		'headings': content[style in ['h2', 'h3', 'h4', 'h5', 'h6']]{
			style,
			'text': pt::text(@)
		}
	},
	_type == 'quote-list' => {
		testimonials[]{
			...,
			_type == 'reference' => @->
		}
	},
`

/* queries */

export async function getSite() {
	return await sanityFetchLive<SITE_QUERY_RESULT>({
		query: SITE_QUERY,
	})
}
