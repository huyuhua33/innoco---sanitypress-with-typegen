import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'site',
	title: 'Site',
	type: 'document',
	groups: [
		{ name: 'branding', default: true },
		{ name: 'navigation' },
		{ name: 'info' },
	],
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
			group: 'branding',
		}),
		defineField({
			name: 'logo',
			type: 'logo',
			group: 'branding',
		}),
		defineField({
			name: 'ogimage',
			title: 'OpenGraph image (global)',
			description: 'Used for social sharing previews',
			type: 'image',
			group: 'branding',
		}),
		defineField({
			name: 'header',
			type: 'reference',
			to: [{ type: 'navigation' }],
			group: 'navigation',
		}),
		defineField({
			name: 'ctas',
			title: 'Call-to-actions',
			type: 'array',
			of: [{ type: 'cta' }],
			group: 'navigation',
		}),
		defineField({
			name: 'languageSelector',
			title: 'Language selector',
			type: 'object',
			group: 'navigation',
			initialValue: {
				enabled: false,
				languages: [],
			},
			fields: [
				defineField({
					name: 'enabled',
					type: 'boolean',
					initialValue: true,
				}),
				defineField({
					name: 'languages',
					type: 'array',
					of: [
						{
							type: 'object',
							fields: [
								defineField({
									name: 'label',
									type: 'string',
									validation: (Rule) => Rule.required(),
								}),
								defineField({
									name: 'code',
									type: 'string',
								}),
								defineField({
									name: 'href',
									title: 'URL',
									type: 'url',
									validation: (Rule) =>
										Rule.uri({
											scheme: ['http', 'https'],
											allowRelative: true,
										}),
								}),
								defineField({
									name: 'active',
									type: 'boolean',
									initialValue: false,
								}),
								defineField({
									name: 'disabled',
									type: 'boolean',
									initialValue: false,
								}),
							],
							preview: {
								select: {
									title: 'label',
									subtitle: 'code',
								},
							},
						},
					],
				}),
			],
		}),
		defineField({
			name: 'footer',
			type: 'reference',
			to: [{ type: 'navigation' }],
			group: 'navigation',
		}),
		defineField({
			name: 'social',
			type: 'reference',
			to: [{ type: 'navigation' }],
			group: 'navigation',
		}),
		defineField({
			name: 'footerContent',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
					lists: [],
				},
			],
			group: 'info',
		}),
		defineField({
			name: 'copyright',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
					lists: [],
				},
			],
			group: 'info',
		}),
	],
	preview: {
		prepare: () => ({
			title: 'Site',
		}),
	},
})
