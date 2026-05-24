import styles from './in.module.css'

type CircleVisualProps = {
	variant?: string
	className?: string
	label?: string
}

const fills = ['#F3CC38', '#E33283', '#218D87', '#43326D', '#FBAE17']

export default function CircleVisual({
	variant = 'overlap',
	className,
	label,
}: CircleVisualProps) {
	if (variant === 'nested') {
		return (
			<svg className={className} viewBox="0 0 400 400" aria-hidden="true">
				<g className={styles.multiply}>
					<circle cx="200" cy="200" r="175" fill={fills[3]} />
					<circle cx="200" cy="200" r="118" fill={fills[1]} />
					<circle cx="200" cy="200" r="58" fill={fills[0]} />
				</g>
				<text
					x="200"
					y="207"
					textAnchor="middle"
					className={styles.svgTextDark}
				>
					{label || 'individual'}
				</text>
			</svg>
		)
	}

	if (variant === 'triple') {
		return (
			<svg className={className} viewBox="0 0 400 320" aria-hidden="true">
				<g className={styles.multiply}>
					<circle cx="160" cy="130" r="82" fill={fills[0]} />
					<circle cx="240" cy="130" r="82" fill={fills[1]} />
					<circle cx="200" cy="205" r="82" fill={fills[2]} />
				</g>
			</svg>
		)
	}

	return (
		<svg className={className} viewBox="0 0 620 540" aria-hidden="true">
			<g className={styles.multiply}>
				<circle cx="220" cy="270" r="190" fill={fills[0]} />
				<circle cx="400" cy="270" r="190" fill={fills[1]} />
			</g>
			<text x="138" y="282" textAnchor="middle" className={styles.svgTextDark}>
				me
			</text>
			<text x="482" y="282" textAnchor="middle" className={styles.svgTextLight}>
				we
			</text>
			<g transform="translate(310,270)" fill="#fff">
				<rect x="-22" y="-10" width="44" height="4" rx="2" />
				<rect x="-22" y="8" width="44" height="4" rx="2" />
			</g>
		</svg>
	)
}
