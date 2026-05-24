import PatternVisual from './pattern-visual'
import styles from './in.module.css'
import type { INItem } from './types'

type ItemGridProps = {
	items?: INItem[]
	className?: string
	renderVisual?: boolean
	visualForIndex?: (index: number) => 'overlap' | 'nested' | 'triple'
	titleClassName?: string
}

export default function ItemGrid({
	items = [],
	className = styles.stages,
	renderVisual,
	visualForIndex = (index) => (index === 3 ? 'nested' : 'overlap'),
	titleClassName,
}: ItemGridProps) {
	const entries = items ?? []

	if (!entries.length) return null

	return (
		<div className={className}>
			{entries.map((item, index) => (
				<div
					className={styles.stage}
					key={item._key || `${item.title}-${index}`}
				>
					{item.label ? (
						<div className={styles.marker}>{item.label}</div>
					) : null}
					{renderVisual ? (
						<div className={styles.stageVisual}>
							<PatternVisual
								fallback={visualForIndex(index)}
								style={item.visualStyle}
							/>
						</div>
					) : null}
					{item.title ? (
						<div className={titleClassName || undefined}>{item.title}</div>
					) : null}
					{item.text ? <p>{item.text}</p> : null}
				</div>
			))}
		</div>
	)
}
