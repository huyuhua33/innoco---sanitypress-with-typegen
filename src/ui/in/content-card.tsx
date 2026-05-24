import Img from '@/ui/img'
import SanityLink from '@/ui/sanity-link'
import styles from './in.module.css'
import type { INCard } from './types'

export default function ContentCard({
	label,
	tags = [],
	color = 'yellow',
	image,
	title,
	description,
	actionLabel = 'Read more',
	link,
	meta,
	compact,
}: INCard) {
	const cardTags = tags ?? []
	const content = (
		<>
			<div className={`${styles.cardBar} ${styles[`bar_${color}`] || ''}`}>
				<span>{label}</span>
				<span aria-hidden="true">IN</span>
			</div>
			<div className={styles.cardMedia}>
				{image?.asset ? (
					<Img
						alt={title || label || ''}
						className={styles.cardImage}
						image={image}
						loading="lazy"
						sizes="(width < 860px) 100vw, 33vw"
					/>
				) : (
					<CardGlyph color={color} compact={compact} />
				)}
			</div>
			<div className={styles.cardBody}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className={styles.cardFooter}>
				<span>{actionLabel} -&gt;</span>
				<span>{meta}</span>
			</div>
		</>
	)

	const searchableTags = Array.from(new Set([label, ...cardTags].filter(Boolean)))

	return (
		<article className={styles.card} data-card-tags={searchableTags.join('|')}>
			<SanityLink className={styles.cardLink} link={link}>
				{content}
			</SanityLink>
		</article>
	)
}

function CardGlyph({ color, compact }: { color: string; compact?: boolean }) {
	const size = compact ? '0 0 220 140' : '0 0 400 300'

	return (
		<svg viewBox={size} aria-hidden="true">
			<rect width="100%" height="100%" fill="currentColor" opacity="0.08" />
			<g className={styles.multiply}>
				<circle
					cx={compact ? 88 : 150}
					cy={compact ? 70 : 150}
					r={compact ? 42 : 92}
					fill="#F3CC38"
				/>
				<circle
					cx={compact ? 132 : 250}
					cy={compact ? 70 : 150}
					r={compact ? 42 : 92}
					fill={
						color === 'teal'
							? '#218D87'
							: color === 'purple'
								? '#43326D'
								: '#E33283'
					}
				/>
				{color === 'blue' || color === 'orange' ? (
					<circle
						cx={compact ? 110 : 200}
						cy={compact ? 70 : 150}
						r={compact ? 20 : 46}
						fill="#43326D"
					/>
				) : null}
			</g>
		</svg>
	)
}
