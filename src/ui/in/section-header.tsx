import styles from './in.module.css'

type SectionHeaderProps = {
	eyebrow?: string
	title?: string
	aside?: string
	titleAs?: 'h2' | 'h3'
}

export default function SectionHeader({
	eyebrow,
	title,
	aside,
	titleAs = 'h2',
}: SectionHeaderProps) {
	const Heading = titleAs

	return (
		<div className={aside ? styles.splitHead : undefined}>
			<div>
				{eyebrow ? <div className={styles.marker}>{eyebrow}</div> : null}
				{title ? <Heading>{title}</Heading> : null}
			</div>
			{aside ? <p className={styles.lede}>{aside}</p> : null}
		</div>
	)
}
