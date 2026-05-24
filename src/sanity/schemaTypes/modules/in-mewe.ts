import { defineField } from 'sanity'
import { VscSymbolClass } from 'react-icons/vsc'
import defineModule from '@/sanity/schemaTypes/fragments/define-module'

const richText = [{ type: 'block' }]

export default defineModule({
	name: 'in-mewe',
	title: 'IN ME=WE Page',
	type: 'object',
	icon: VscSymbolClass,
	groups: [{ name: 'content', default: true }],
	fields: [
		defineField({ name: 'eyebrow', type: 'string', group: 'content' }),
		defineField({ name: 'title', type: 'string', group: 'content' }),
		defineField({ name: 'lede', type: 'text', rows: 3, group: 'content' }),
		defineField({ name: 'essayMarker', type: 'string', group: 'content' }),
		defineField({ name: 'essayTitle', type: 'string', group: 'content' }),
		defineField({
			name: 'essay',
			type: 'array',
			of: richText,
			group: 'content',
		}),
		defineField({ name: 'resonanceMarker', type: 'string', group: 'content' }),
		defineField({ name: 'resonanceTitle', type: 'string', group: 'content' }),
		defineField({ name: 'resonanceQuote', type: 'string', group: 'content' }),
		defineField({
			name: 'resonanceItems',
			type: 'array',
			of: [{ type: 'in.item' }],
			group: 'content',
		}),
		defineField({ name: 'journeyMarker', type: 'string', group: 'content' }),
		defineField({ name: 'journeyTitle', type: 'string', group: 'content' }),
		defineField({
			name: 'journeyAside',
			type: 'text',
			rows: 2,
			group: 'content',
		}),
		defineField({
			name: 'journeyItems',
			description:
				'Editable middle slider items for the ME=WE sequence.',
			type: 'array',
			of: [{ type: 'in.item' }],
			group: 'content',
		}),
		defineField({ name: 'experienceMarker', type: 'string', group: 'content' }),
		defineField({
			name: 'experienceTitle',
			type: 'text',
			rows: 2,
			group: 'content',
		}),
		defineField({
			name: 'experienceAside',
			type: 'text',
			rows: 2,
			group: 'content',
		}),
		defineField({
			name: 'stages',
			type: 'array',
			of: [{ type: 'in.item' }],
			group: 'content',
		}),
		defineField({
			name: 'cards',
			description:
				'Reusable IN cards shown with the shared card view.',
			type: 'array',
			of: [{ type: 'in.card' }],
			group: 'content',
		}),
		defineField({ name: 'mattersMarker', type: 'string', group: 'content' }),
		defineField({ name: 'mattersTitle', type: 'string', group: 'content' }),
		defineField({
			name: 'mattersText',
			type: 'text',
			rows: 4,
			group: 'content',
		}),
		defineField({ name: 'invitationMarker', type: 'string', group: 'content' }),
		defineField({ name: 'invitationTitle', type: 'string', group: 'content' }),
		defineField({
			name: 'invitationText',
			type: 'text',
			rows: 3,
			group: 'content',
		}),
		defineField({ name: 'ctaLabel', type: 'string', group: 'content' }),
	],
	initialValue: {
		eyebrow: 'The relational pattern',
		title: 'ME=WE',
		lede: 'Recognizing the pattern already at work - between us, within us, through us.',
		essayMarker: '01 - Recognizing the pattern',
		essayTitle: 'It is natural to feel separate at times.',
		essay: [
			{
				_type: 'block',
				children: [
					{
						_type: 'span',
						text: 'In teams, when collaboration feels strained. In families, when misunderstanding lingers. In communities, when alignment feels fragile. Even within ourselves.',
					},
				],
			},
			{
				_type: 'block',
				children: [
					{
						_type: 'span',
						text: 'Given the complexity of modern life, this sense of separation makes sense.',
					},
				],
			},
			{
				_type: 'block',
				children: [
					{
						_type: 'span',
						text: 'And yet, something else is also quietly true.',
					},
				],
			},
			{
				_type: 'block',
				children: [
					{
						_type: 'span',
						text: 'ME=WE names this reality. It does not introduce a belief. It draws attention to a pattern already at work.',
					},
				],
			},
		],
		resonanceMarker: '02 - Life reflects the pattern',
		resonanceTitle: 'Separation may be felt. Relationships are structural.',
		resonanceQuote:
			'We are not outside this pattern. We are expressions of it.',
		resonanceItems: [
			{
				label: 'i.',
				title: 'DNA',
				text: 'DNA strands appear separate, yet neither sustains life alone.',
				visualStyle: 'dna',
			},
			{
				label: 'ii.',
				title: 'Nervous system',
				text: 'Our nervous systems regulate through interaction.',
				visualStyle: 'nervous-system',
			},
			{
				label: 'iii.',
				title: 'Ecosystem',
				text: 'Ecosystems thrive through interdependence.',
				visualStyle: 'ecosystem',
			},
		],
		journeyMarker: 'ME=WE sequence',
		journeyTitle: 'Recognizing life as relationship, then practicing it.',
		journeyAside:
			'Use these slider items as an editable assembly for the middle of the page.',
		journeyItems: [
			{
				label: '01',
				title: 'Recognizing',
				text: 'Separation may be felt, while relationship is already shaping the field.',
				visualStyle: 'overlap',
			},
			{
				label: '02',
				title: 'Life reflects',
				text: 'DNA, nervous systems, and ecosystems show interdependence as a living pattern.',
				visualStyle: 'ecosystem',
			},
			{
				label: '03',
				title: 'Experience',
				text: 'ME=WE becomes real through practice, dialogue, and participation.',
				visualStyle: 'four-stage',
			},
			{
				label: '04',
				title: 'Why it matters',
				text: 'Individual action shapes relationships, shared patterns, and communities.',
				visualStyle: 'nested',
			},
			{
				label: '05',
				title: 'Invitation',
				text: 'Step into workshops that help people notice, practice, and embody the pattern together.',
				visualStyle: 'mewe-mark',
			},
		],
		experienceMarker: '03 - The experience',
		experienceTitle:
			'If this pattern is already operating, what changes when we become conscious of it?',
		experienceAside:
			'ME=WE unfolds through practice - not as theory, but as something lived.',
		stages: [
			{
				label: 'i.',
				title: 'ME != WE',
				text: 'I remain inside my own frame.',
				visualStyle: 'overlap',
			},
			{
				label: 'ii.',
				title: 'ME WE',
				text: 'I begin to notice that my choices ripple outward.',
				visualStyle: 'overlap',
			},
			{
				label: 'iii.',
				title: '(ME WE)',
				text: 'We connect, and face the challenge as one unit.',
				visualStyle: 'triple',
			},
			{
				label: 'iv.',
				title: 'ME = WE',
				text: 'When I move, the relational field moves.',
				visualStyle: 'nested',
			},
		],
		cards: [
			{
				label: 'Practice',
				tags: ['ME=WE', 'Practice'],
				color: 'yellow',
				title: 'Recognizing the pattern',
				description:
					'Notice where separation is felt and where relationship is already shaping the work.',
				actionLabel: 'Explore',
				meta: '01',
			},
			{
				label: 'Workshop',
				tags: ['ME=WE', 'Workshop'],
				color: 'pink',
				title: 'The ME=WE pathway',
				description:
					'Move from disconnected to co-creating through a shared field of practice.',
				actionLabel: 'Explore',
				meta: '04 stages',
			},
			{
				label: 'Invitation',
				tags: ['ME=WE', 'Invitation'],
				color: 'teal',
				title: 'Step into the work',
				description:
					'Workshops for noticing, practicing, and embodying the relational pattern together.',
				actionLabel: 'Explore',
				meta: 'Open',
			},
		],
		mattersMarker: '04 - Why it matters',
		mattersTitle: 'Individual action does not remain individual.',
		mattersText:
			'It shapes relationships. Relationships shape shared patterns. Shared patterns shape communities. Community transformation is not manufactured. It unfolds through participation.',
		invitationMarker: '05 - The invitation',
		invitationTitle:
			'ME=WE is not something to adopt. It is something to experience.',
		invitationText:
			'Our workshops are spaces to notice, practice, and embody this relational pattern together. If this resonates, step into the work.',
		ctaLabel: 'Explore Workshops',
	},
	preview: {
		select: { title: 'title' },
		prepare: ({ title }) => ({ title, subtitle: 'IN ME=WE Page' }),
	},
})
