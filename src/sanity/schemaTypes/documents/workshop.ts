import { defineField, defineType } from 'sanity'
import { VscMortarBoard } from 'react-icons/vsc'
import {
	inWorkshopContentFields,
	inWorkshopInitialValue,
} from '../modules/in-workshop'
import { inCardColors } from '../objects/in-card'

export default defineType({
	name: 'workshop',
	title: 'Workshop',
	type: 'document',
	icon: VscMortarBoard,
	groups: [
		{ name: 'card', title: 'Collection card', default: true },
		{ name: 'content', title: 'Workshop page' },
	],
	fields: [
		defineField({
			name: 'cardLabel',
			title: 'Label',
			type: 'string',
			group: 'card',
		}),
		defineField({
			name: 'cardTags',
			title: 'Search tags',
			description: 'Keywords used by the workshop collection search.',
			type: 'array',
			of: [{ type: 'string' }],
			group: 'card',
		}),
		defineField({
			name: 'cardColor',
			title: 'Card color',
			type: 'string',
			options: { list: inCardColors },
			group: 'card',
		}),
		defineField({
			name: 'cardImage',
			title: 'Card image',
			type: 'image',
			options: { hotspot: true },
			group: 'card',
		}),
		defineField({
			name: 'cardDescription',
			title: 'Card description',
			type: 'text',
			rows: 3,
			group: 'card',
		}),
		defineField({
			name: 'cardActionLabel',
			title: 'Action label',
			type: 'string',
			group: 'card',
		}),
		defineField({
			name: 'cardMeta',
			title: 'Card meta',
			type: 'string',
			group: 'card',
		}),
		defineField({
			name: 'page',
			title: 'Workshop page',
			description:
				'Optional. Link this card to a Page that contains an IN Workshop Page module using this workshop.',
			type: 'reference',
			to: [{ type: 'page' }],
			group: 'card',
		}),
		...inWorkshopContentFields,
	],
	initialValue: {
		cardLabel: 'Workshop',
		cardTags: ['Workshop'],
		cardColor: 'yellow',
		cardActionLabel: 'Read more',
		...inWorkshopInitialValue,
	},
	preview: {
		select: {
			title: 'title',
			subtitle: 'cardMeta',
			media: 'cardImage',
		},
		prepare: ({ title, subtitle, media }) => ({
			title,
			subtitle: subtitle || 'Workshop',
			media: media || VscMortarBoard,
		}),
	},
})
