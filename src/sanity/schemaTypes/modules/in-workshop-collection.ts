import { defineField } from 'sanity'
import { VscMortarBoard } from 'react-icons/vsc'
import defineModule from '@/sanity/schemaTypes/fragments/define-module'

export default defineModule({
	name: 'in-workshop-collection',
	title: 'IN Workshop Collection',
	type: 'object',
	icon: VscMortarBoard,
	groups: [{ name: 'content', default: true }],
	fields: [
		defineField({ name: 'eyebrow', type: 'string', group: 'content' }),
		defineField({ name: 'title', type: 'text', rows: 2, group: 'content' }),
		defineField({ name: 'intro', type: 'text', rows: 3, group: 'content' }),
		defineField({
			name: 'searchPlaceholder',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'filters',
			type: 'array',
			of: [{ type: 'string' }],
			group: 'content',
		}),
		defineField({
			name: 'workshops',
			description:
				'Leave empty to show all Workshop documents. Add references to curate the order manually.',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'workshop' }] }],
			group: 'content',
		}),
	],
	initialValue: {
		eyebrow: 'Workshops',
		title: 'A growing collection of practices and learning journeys.',
		intro:
			'Search the workshop collection and step into the story that fits the work in front of you.',
		searchPlaceholder: 'Search workshops',
		filters: ['All', 'Workshop'],
	},
	preview: {
		select: { title: 'title' },
		prepare: ({ title }) => ({ title, subtitle: 'IN Workshop Collection' }),
	},
})
