import { defineField } from 'sanity'
import { VscMortarBoard } from 'react-icons/vsc'
import defineModule from '@/sanity/schemaTypes/fragments/define-module'

export const inWorkshopContentFields = [
	defineField({ name: 'eyebrow', type: 'string', group: 'content' }),
	defineField({ name: 'title', type: 'string', group: 'content' }),
	defineField({ name: 'subtitle', type: 'string', group: 'content' }),
	defineField({ name: 'lede', type: 'text', rows: 3, group: 'content' }),
	defineField({
		name: 'meta',
		type: 'array',
		of: [{ type: 'string' }],
		group: 'content',
	}),
	defineField({ name: 'primaryCta', type: 'string', group: 'content' }),
	defineField({ name: 'secondaryCta', type: 'string', group: 'content' }),
	defineField({
		name: 'intentionsEyebrow',
		type: 'string',
		group: 'content',
	}),
	defineField({ name: 'intentionsTitle', type: 'string', group: 'content' }),
	defineField({
		name: 'intentions',
		type: 'array',
		of: [{ type: 'in.item' }],
		group: 'content',
	}),
	defineField({ name: 'pathwayEyebrow', type: 'string', group: 'content' }),
	defineField({
		name: 'pathwayTitle',
		type: 'text',
		rows: 2,
		group: 'content',
	}),
	defineField({
		name: 'pathwayAside',
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
	defineField({ name: 'themesEyebrow', type: 'string', group: 'content' }),
	defineField({ name: 'themesTitle', type: 'string', group: 'content' }),
	defineField({
		name: 'themes',
		type: 'array',
		of: [{ type: 'in.item' }],
		group: 'content',
	}),
	defineField({ name: 'barriersTitle', type: 'string', group: 'content' }),
	defineField({
		name: 'barriers',
		type: 'array',
		of: [{ type: 'in.item' }],
		group: 'content',
	}),
	defineField({ name: 'formatTitle', type: 'string', group: 'content' }),
	defineField({
		name: 'formatText',
		type: 'text',
		rows: 3,
		group: 'content',
	}),
	defineField({
		name: 'formatCards',
		type: 'array',
		of: [{ type: 'in.item' }],
		group: 'content',
	}),
	defineField({
		name: 'closingQuote',
		type: 'text',
		rows: 2,
		group: 'content',
	}),
]

export const inWorkshopInitialValue = {
	eyebrow: 'A ME=WE Workshop - For Organizations',
	title: 'METANOIA',
	subtitle: 'Change from within.',
	lede: 'METANOIA challenges how you see and interact with yourself, others, and your organization - through inner work, dialogue, and shared practice.',
	meta: ['4 days', 'In-person or online', 'Teams - Leaders - Educators'],
	primaryCta: 'Apply or inquire',
	secondaryCta: 'See the program',
	intentionsEyebrow: 'It begins with sensing',
	intentionsTitle: 'It starts with sensing what everyone truly wants in life.',
	intentions: [
		{ label: 'i.', title: 'I want to be happy with myself.', text: '' },
		{
			label: 'ii.',
			title: 'I want to experience real joy in my relationships.',
			text: '',
		},
		{ label: 'iii.', title: 'I want to be effective in my work.', text: '' },
	],
	pathwayEyebrow: 'The ME=WE pathway',
	pathwayTitle:
		'From disconnected to co-creating - a four-stage journey of inner work.',
	pathwayAside:
		'The same relational pattern, lived in four movements. The visual progression you see is the journey itself.',
	stages: [
		{
			label: 'i.',
			title: 'Disconnected',
			text: 'Becoming aware of where we feel separate - from ourselves, from others, from the work.',
		},
		{
			label: 'ii.',
			title: 'Connecting',
			text: "Sensing how our choices ripple outward, and how others' presence shapes us in return.",
		},
		{
			label: 'iii.',
			title: 'Collaborating',
			text: 'Holding the challenge together as one unit - distinct, yet meeting in shared work.',
		},
		{
			label: 'iv.',
			title: 'Co-creating',
			text: 'When the field moves with us - purpose, presence, and shared making become inseparable.',
		},
	],
	themesEyebrow: 'What we explore',
	themesTitle:
		'Four key themes - self, relationship, organization, integration.',
	themes: [
		{
			label: 'i. Self',
			title: 'Awakening to your best potential self.',
			text: 'See the assumptions you carry. Sense what is wanting to change in you. Commit to a pathway of growth that honors who you are becoming.',
		},
		{
			label: 'ii. Relationship',
			title: 'Cultivating richer relationships.',
			text: 'Move beyond habits of reaction toward deeper listening, dialogue, and shared meaning-making.',
		},
		{
			label: 'iii. Organization',
			title: 'Making meaning of the work we do.',
			text: 'Reconnect with the larger purpose your team is serving. Notice the patterns that hold the organization together.',
		},
		{
			label: 'iv. Integration',
			title: 'Bringing it all back together.',
			text: 'Threads from self, relationship, and organization weave into a cohesive action plan.',
		},
	],
	barriersTitle:
		'From the voices that restrain us - to the openness that frees us.',
	barriers: [
		{
			label: 'What restrains us',
			title: 'Voices that hold us back.',
			text: 'The voice of judgment. The voice of cynicism. The voice of fear.',
		},
		{
			label: 'What frees us',
			title: 'Openness that lets us grow.',
			text: 'An open mind. An open heart. An open will.',
		},
	],
	formatTitle: 'Designed for onsite delivery, available online via Zoom.',
	formatText:
		'Each theme is explored in dedicated sessions. The final day integrates all insights into a cohesive action plan you carry forward.',
	formatCards: [
		{
			label: 'Duration',
			title: '4 days',
			text: 'In-person, or adapted as virtual sessions',
		},
		{
			label: 'Format',
			title: 'In-person - Online',
			text: "Flexible to meet your team's schedule",
		},
		{
			label: 'Group size',
			title: '12 - 30',
			text: 'Teams, leadership groups, communities of practice',
		},
		{
			label: 'Languages',
			title: 'EN - Korean',
			text: 'Other languages available on request',
		},
	],
	closingQuote:
		'"The success of intervention depends on the interior condition of the intervener." - Bill OBrien',
}

export default defineModule({
	name: 'in-workshop',
	title: 'IN Workshop Page',
	type: 'object',
	icon: VscMortarBoard,
	groups: [{ name: 'content', default: true }],
	fields: [
		defineField({
			name: 'workshop',
			title: 'Workshop content',
			description:
				'Optional. Choose a Workshop document to drive this page with reusable admin-managed content.',
			type: 'reference',
			to: [{ type: 'workshop' }],
			group: 'content',
		}),
		...inWorkshopContentFields,
	],
	initialValue: inWorkshopInitialValue,
	preview: {
		select: { title: 'title' },
		prepare: ({ title }) => ({ title, subtitle: 'IN Workshop Page' }),
	},
})
