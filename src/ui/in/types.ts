export type INColor = 'yellow' | 'pink' | 'teal' | 'purple' | 'orange' | 'blue'

export type INCard = {
	label?: string
	tags?: string[]
	color?: INColor
	image?: any
	title?: string
	description?: string
	actionLabel?: string
	link?: any
	meta?: string
	compact?: boolean
	_key?: string
}

export type INItem = {
	label?: string
	title?: string
	text?: string
	visualStyle?:
		| 'overlap'
		| 'triple'
		| 'nested'
		| 'dna'
		| 'nervous-system'
		| 'ecosystem'
		| 'four-stage'
		| 'mewe-mark'
	_key?: string
}
