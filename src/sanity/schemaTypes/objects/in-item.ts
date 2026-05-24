import { defineField, defineType } from 'sanity'

export const inVisualStyles = [
	{ title: 'Default overlap circles', value: 'overlap' },
	{ title: 'Triple circles', value: 'triple' },
	{ title: 'Nested ripple', value: 'nested' },
	{ title: 'DNA strands', value: 'dna' },
	{ title: 'Nervous system pulses', value: 'nervous-system' },
	{ title: 'Ecosystem circles', value: 'ecosystem' },
	{ title: 'Four-stage progression', value: 'four-stage' },
	{ title: 'ME=WE mark', value: 'mewe-mark' },
]

export default defineType({
	name: 'in.item',
	title: 'IN Item',
	type: 'object',
	fields: [
		defineField({ name: 'label', type: 'string' }),
		defineField({ name: 'title', type: 'string' }),
		defineField({ name: 'text', type: 'text', rows: 3 }),
		defineField({
			name: 'visualStyle',
			title: 'Visual style',
			description:
				'Select a code-rendered ME=WE visual. Used by resonance, sliders, and stage-style components.',
			type: 'string',
			options: { list: inVisualStyles },
		}),
	],
	preview: {
		select: { title: 'title', subtitle: 'label', visualStyle: 'visualStyle' },
		prepare: ({ title, subtitle, visualStyle }) => ({
			title,
			subtitle: [subtitle, visualStyle].filter(Boolean).join(' - '),
		}),
	},
})
