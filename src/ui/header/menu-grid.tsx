import type { Page } from '@/sanity/types'
import SanityLink, { type SanityLinkType } from '@/ui/sanity-link'
import css from './header.module.css'

type HeaderItem = {
	_key?: string
	_type?: string
	link?: unknown
	[key: string]: unknown
}

function getItemLink(item: HeaderItem) {
	if (item._type === 'link') return item as SanityLinkType
	return item.link as SanityLinkType | undefined
}

function getItemTitle(item: HeaderItem) {
	const link = getItemLink(item)
	return (
		link?.label || (link?.internal as unknown as Page)?.title || link?.external
	)
}

export default function MenuGrid({ items }: { items?: unknown[] | null }) {
	if (!items?.length) return null

	return (
		<div className={css.menuGrid}>
			{items.map((item, index) => {
				const headerItem = item as HeaderItem
				const link = getItemLink(headerItem)
				const title = getItemTitle(headerItem)
				if (!link || !title) return null

				return (
					<SanityLink
						link={link}
						className={css.menuCard}
						key={headerItem._key ?? index}
					>
						<span className={css.menuCardNumber}>
							{String(index + 1).padStart(2, '0')}
						</span>
						<span className={css.menuCardArrow}>↗</span>
						<span className={css.menuCardTitle}>{title}</span>
					</SanityLink>
				)
			})}
		</div>
	)
}
