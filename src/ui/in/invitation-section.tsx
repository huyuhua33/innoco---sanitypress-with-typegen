import ActionLink from './actions'
import styles from './in.module.css'

type InvitationSectionProps = {
	id?: string
	eyebrow?: string
	title?: string
	text?: string
	ctaLabel?: string
	href?: string
}

export default function InvitationSection({
	id,
	eyebrow,
	title,
	text,
	ctaLabel,
	href = '#contact',
}: InvitationSectionProps) {
	return (
		<div className={`${styles.section} ${styles.invitation}`} id={id}>
			{eyebrow ? <div className={styles.marker}>{eyebrow}</div> : null}
			{title ? <h3>{title}</h3> : null}
			{text ? <p className={styles.lede}>{text}</p> : null}
			<ActionLink href={href}>{ctaLabel}</ActionLink>
		</div>
	)
}
