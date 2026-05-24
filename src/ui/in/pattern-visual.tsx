import CircleVisual from './circle-visual'
import styles from './in.module.css'
import type { INItem } from './types'

type PatternVisualProps = {
	style?: INItem['visualStyle']
	fallback?: 'overlap' | 'nested' | 'triple'
	className?: string
}

export default function PatternVisual({
	style,
	fallback = 'overlap',
	className,
}: PatternVisualProps) {
	const visualStyle = style || fallback

	if (visualStyle === 'dna') {
		return (
			<svg
				aria-hidden="true"
				className={className}
				viewBox="0 0 130 130"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g className={styles.multiply}>
					<path
						d="M30,15 Q90,40 30,65 Q90,90 30,115"
						fill="none"
						stroke="#F3CC38"
						strokeLinecap="round"
						strokeWidth="14"
					/>
					<path
						d="M100,15 Q40,40 100,65 Q40,90 100,115"
						fill="none"
						stroke="#E33283"
						strokeLinecap="round"
						strokeWidth="14"
					/>
				</g>
			</svg>
		)
	}

	if (visualStyle === 'nervous-system') {
		return (
			<svg
				aria-hidden="true"
				className={className}
				viewBox="0 0 130 130"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g
					className={styles.multiply}
					fill="none"
					strokeLinecap="round"
					strokeWidth="6"
				>
					<path d="M10,70 Q35,30 65,70 T120,70" stroke="#43326D" />
					<path d="M10,60 Q35,100 65,60 T120,60" stroke="#218D87" />
				</g>
				<circle
					className={styles.multiply}
					cx="65"
					cy="65"
					fill="#F3CC38"
					r="9"
				/>
			</svg>
		)
	}

	if (visualStyle === 'ecosystem') {
		return (
			<svg
				aria-hidden="true"
				className={className}
				viewBox="0 0 130 130"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g className={styles.multiply}>
					<circle cx="48" cy="50" fill="#3F7E46" r="36" />
					<circle cx="82" cy="50" fill="#218D87" r="36" />
					<circle cx="65" cy="84" fill="#F3CC38" r="36" />
				</g>
			</svg>
		)
	}

	if (visualStyle === 'four-stage') {
		return (
			<svg
				aria-hidden="true"
				className={className}
				viewBox="0 0 400 320"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g className={styles.multiply}>
					<circle cx="50" cy="80" fill="#F3CC38" r="22" />
					<circle cx="100" cy="80" fill="#E33283" r="22" />
					<circle cx="200" cy="80" fill="#F3CC38" r="22" />
					<circle cx="244" cy="80" fill="#E33283" r="22" />
					<circle cx="65" cy="220" fill="#F3CC38" r="22" />
					<circle cx="100" cy="220" fill="#E33283" r="22" />
					<circle cx="220" cy="220" fill="#F3CC38" r="22" />
					<circle cx="220" cy="220" fill="#E33283" r="22" />
				</g>
				<g className={styles.patternLabel}>
					<text x="75" y="130" textAnchor="middle">
						ME != WE
					</text>
					<text x="222" y="130" textAnchor="middle">
						ME WE
					</text>
					<text x="82" y="270" textAnchor="middle">
						(ME WE)
					</text>
					<text x="220" y="270" textAnchor="middle">
						ME = WE
					</text>
				</g>
			</svg>
		)
	}

	if (visualStyle === 'mewe-mark') {
		return (
			<svg
				aria-hidden="true"
				className={className}
				viewBox="0 0 400 320"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g className={styles.multiply}>
					<circle cx="200" cy="160" fill="#F3CC38" r="120" />
					<circle cx="200" cy="160" fill="#E33283" r="120" />
				</g>
				<text
					className={styles.svgTextLight}
					fontSize="32"
					textAnchor="middle"
					x="200"
					y="170"
				>
					me=we
				</text>
			</svg>
		)
	}

	const circleStyle =
		visualStyle === 'triple' || visualStyle === 'nested' ? visualStyle : fallback

	return <CircleVisual className={className} variant={circleStyle} />
}
