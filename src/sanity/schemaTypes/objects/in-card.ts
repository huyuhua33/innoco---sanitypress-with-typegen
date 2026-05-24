import { defineField, defineType } from 'sanity'

export const inCardColors = ['yellow', 'pink', 'teal', 'purple', 'orange', 'blue']

export default defineType({
	name: 'in.card',
	title: 'IN Card',
	type: 'object',
	fields: [
		defineField({ name: 'label', type: 'string' }),
		defineField({
			name: 'tags',
			description: 'Search keywords such as Workshop, Story, Tool, or Connect.',
			type: 'array',
			of: [{ type: 'string' }],
		}),
		defineField({
			name: 'color',
			type: 'string',
			options: { list: inCardColors },
		}),
		defineField({
			name: 'image',
			description: 'Optional card image from the Sanity media library.',
			type: 'image',
			options: { hotspot: true },
		}),
		defineField({ name: 'title', type: 'string' }),
		defineField({ name: 'description', type: 'text', rows: 3 }),
		defineField({ name: 'actionLabel', type: 'string' }),
		defineField({ name: 'link', type: 'link' }),
		defineField({ name: 'meta', type: 'string' }),
	],
	preview: { select: { title: 'title', subtitle: 'label' } },
})
