import { defineField } from 'sanity'
import { VscHome } from 'react-icons/vsc'
import defineModule from '@/sanity/schemaTypes/fragments/define-module'

export default defineModule({
	name: 'in-landing',
	title: 'IN Landing Page',
	type: 'object',
	icon: VscHome,
	groups: [{ name: 'content', default: true }],
	fields: [
		defineField({ name: 'eyebrow', type: 'string', group: 'content' }),
		defineField({ name: 'title', type: 'string', group: 'content' }),
		defineField({ name: 'subtitle', type: 'text', rows: 3, group: 'content' }),
		defineField({ name: 'metaLeft', type: 'string', group: 'content' }),
		defineField({ name: 'metaRight', type: 'string', group: 'content' }),
		defineField({
			name: 'sectionTitle',
			type: 'text',
			rows: 2,
			group: 'content',
		}),
		defineField({ name: 'sectionNote', type: 'string', group: 'content' }),
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
			name: 'cards',
			type: 'array',
			of: [{ type: 'in.card' }],
			group: 'content',
		}),
		defineField({ name: 'storyEyebrow', type: 'string', group: 'content' }),
		defineField({
			name: 'storyTitle',
			type: 'text',
			rows: 2,
			group: 'content',
		}),
		defineField({ name: 'storyText', type: 'text', rows: 4, group: 'content' }),
	],
	initialValue: {
		eyebrow: 'A collective practice - est. in quiet conversation',
		title: 'IN is a studio for shared growth.',
		subtitle:
			'A small learning and action hub exploring how we grow inwardly while contributing to the wellbeing of each other, and of society.',
		metaLeft: 'Seoul - Community - 2020 to now',
		metaRight: 'ME = WE',
		sectionTitle:
			'Recent from the studio - workshops, stories, and tools we are practicing with right now.',
		sectionNote: 'Updated weekly. Written slowly.',
		filters: ['All', 'Workshop', 'Story', 'Tool', 'Connect'],
		cards: [
			{
				label: 'Workshop',
				tags: ['Workshop'],
				color: 'yellow',
				title: 'The ME=WE Intensive',
				description:
					'A three-day facilitated gathering on the relationship between personal transformation and collective wellbeing.',
				actionLabel: 'Read more',
				meta: 'Nov - Seoul',
			},
			{
				label: 'Story',
				tags: ['Story'],
				color: 'pink',
				title: 'One continuous surface',
				description:
					'On the Mobius strip as a quiet metaphor for why self and society are not two things, but one.',
				actionLabel: 'Read more',
				meta: '9 min read',
			},
			{
				label: 'Tool',
				tags: ['Tool'],
				color: 'teal',
				title: 'Dialogue Cards - v2',
				description:
					'A small deck of 36 prompts for circles, classrooms, and community suppers. Free and printable.',
				actionLabel: 'Download',
				meta: 'Free - PDF',
			},
			{
				label: 'Workshop',
				tags: ['Workshop'],
				color: 'purple',
				title: 'Community Circles',
				description:
					'Six weekly gatherings for people carrying service-oriented work in their own neighborhoods.',
				actionLabel: 'Apply',
				meta: 'Cohort 04',
			},
			{
				label: 'Story',
				tags: ['Story'],
				color: 'orange',
				title: 'What kind of ancestor?',
				description:
					'A guiding question - for life, for work, for education. An essay on thinking across generations.',
				actionLabel: 'Read more',
				meta: '12 min read',
			},
			{
				label: 'Connect',
				tags: ['Connect'],
				color: 'blue',
				title: 'Join the IN circle',
				description:
					'A letter every few weeks with quiet reflections, reading, and invitations. No noise.',
				actionLabel: 'Subscribe',
				meta: 'Free',
			},
		],
		searchPlaceholder: 'Search by tag',
		storyEyebrow: 'ME = WE',
		storyTitle:
			'Personal transformation and collective wellbeing are inseparable.',
		storyText:
			'What appears to be two sides - self and society - is one continuous surface. IN is a small place where we practice this understanding together, through dialogue, reflection, and shared work.',
	},
	preview: {
		select: { title: 'title' },
		prepare: ({ title }) => ({ title, subtitle: 'IN Landing Page' }),
	},
})
