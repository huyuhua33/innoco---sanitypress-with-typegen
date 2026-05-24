import ContentCard from './content-card'
import styles from './in.module.css'
import type { INCard } from './types'

type CardGridProps = {
	cards?: INCard[]
	className?: string
	compact?: boolean
}

export default function CardGrid({
	cards = [],
	className = styles.grid,
	compact,
}: CardGridProps) {
	const items = cards ?? []

	if (!items.length) return null

	return (
		<div className={className}>
			{items.map((card, index) => (
				<ContentCard
					{...card}
					compact={compact ?? card.compact}
					key={card._key || `${card.title}-${index}`}
				/>
			))}
		</div>
	)
}
