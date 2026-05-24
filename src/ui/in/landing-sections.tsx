import styles from './in.module.css'
import LandingFeedSearch from './landing-feed-search'
import type { INCard } from './types'

type LandingHeroProps = {
	eyebrow?: string
	title?: string
	subtitle?: string
	metaLeft?: string
	metaRight?: string
}

export function LandingHero({
	eyebrow,
	title,
	subtitle,
	metaLeft,
	metaRight,
}: LandingHeroProps) {
	return (
		<div className={`${styles.landingHero} ${styles.section}`}>
			<div className={styles.aura} />
			<div className={styles.heroContent}>
				{eyebrow ? <div className={styles.eyebrow}>{eyebrow}</div> : null}
				{title ? <h1>{title}</h1> : null}
				{subtitle ? <p>{subtitle}</p> : null}
			</div>
			<div className={styles.heroMeta}>
				{metaLeft ? <span>{metaLeft}</span> : null}
				{metaRight ? <span>{metaRight}</span> : null}
			</div>
		</div>
	)
}

type LandingFeedProps = {
	sectionTitle?: string
	sectionNote?: string
	searchPlaceholder?: string
	filters?: string[]
	cards?: INCard[]
}

export function LandingFeed({
	sectionTitle,
	sectionNote,
	searchPlaceholder,
	filters = [],
	cards = [],
}: LandingFeedProps) {
	return (
		<>
			<div className={`${styles.section} ${styles.sectionHead}`}>
				{sectionTitle ? <h2>{sectionTitle}</h2> : null}
				<div>
					{sectionNote ? (
						<p className={styles.plainText}>{sectionNote}</p>
					) : null}
				</div>
			</div>

			<div className={styles.section}>
				<LandingFeedSearch
					cards={cards}
					filters={filters}
					placeholder={searchPlaceholder}
				/>
			</div>
		</>
	)
}

type LandingStoryProps = {
	eyebrow?: string
	title?: string
	text?: string
}

export function LandingStory({ eyebrow, title, text }: LandingStoryProps) {
	return (
		<div className={`${styles.section} ${styles.quiet}`}>
			{eyebrow ? <div className={styles.marker}>{eyebrow}</div> : null}
			{title ? <h2>{title}</h2> : null}
			{text ? <p className={styles.lede}>{text}</p> : null}
		</div>
	)
}
