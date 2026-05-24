import styles from './in.module.css'

type PillListProps = {
	items?: string[]
	className?: string
}

export default function PillList({ items = [], className }: PillListProps) {
	const entries = items ?? []

	if (!entries.length) return null

	return (
		<div className={className || styles.filters}>
			{entries.map((item) => (
				<span key={item}>{item}</span>
			))}
		</div>
	)
}
