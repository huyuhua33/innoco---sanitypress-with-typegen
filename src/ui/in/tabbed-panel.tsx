'use client'

import { useState } from 'react'
import styles from './in.module.css'
import PatternVisual from './pattern-visual'
import type { INItem } from './types'

type TabbedPanelProps = {
	items?: INItem[]
	variant?: 'panel' | 'slides'
}

export default function TabbedPanel({
	items = [],
	variant = 'panel',
}: TabbedPanelProps) {
	const entries = items ?? []
	const [current, setCurrent] = useState(0)
	const active = entries[current]
	const total = entries.length

	if (!entries.length) return null

	const goTo = (index: number) => {
		setCurrent(Math.min(Math.max(index, 0), total - 1))
	}

	if (variant === 'slides') {
		return (
			<div className={styles.slidesBlock}>
				<div className={styles.slidesCounter}>
					<strong>{String(current + 1).padStart(2, '0')}</strong>
					<span>/</span>
					<span>{String(total).padStart(2, '0')}</span>
				</div>
				<div className={styles.slideTabs} role="tablist">
					{entries.map((item, index) => (
						<button
							aria-selected={index === current}
							className={index === current ? styles.activeSlideTab : undefined}
							key={item._key || `${item.title}-${index}`}
							onClick={() => goTo(index)}
							role="tab"
							type="button"
						>
							<span>{String(index + 1).padStart(2, '0')}</span>
							<span>{item.title}</span>
						</button>
					))}
				</div>
				<div className={styles.slideStage}>
					<div className={styles.slideVisual}>
						<PatternVisual
							fallback={
								current === 2 ? 'triple' : current === 3 ? 'nested' : 'overlap'
							}
							style={active?.visualStyle}
						/>
					</div>
					<div className={styles.slideContent}>
						<div className={styles.slideNum}>{active?.label}</div>
						{active?.title ? <h3>{active.title}</h3> : null}
						{active?.text ? <p>{active.text}</p> : null}
					</div>
				</div>
				<div className={styles.slideControls}>
					<div className={styles.slideProgress}>
						{entries.map((item, index) => (
							<button
								aria-label={`Go to slide ${index + 1}`}
								className={index === current ? styles.activeSlideDot : undefined}
								key={item._key || `${item.title}-dot-${index}`}
								onClick={() => goTo(index)}
								type="button"
							/>
						))}
					</div>
					<div className={styles.slideArrows}>
						<button
							aria-label="Previous slide"
							disabled={current === 0}
							onClick={() => goTo(current - 1)}
							type="button"
						>
							←
						</button>
						<button
							aria-label="Next slide"
							disabled={current === total - 1}
							onClick={() => goTo(current + 1)}
							type="button"
						>
							→
						</button>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.tabsBlock}>
			<div className={styles.tabs} role="tablist">
				{entries.map((item, index) => (
					<button
						aria-selected={index === current}
						className={index === current ? styles.activeTab : undefined}
						key={`${item.label}-${index}`}
						onClick={() => setCurrent(index)}
						role="tab"
						type="button"
					>
						<span>{String(index + 1).padStart(2, '0')}</span>
						<span>{item.label?.replace(/^[ivx]+\.\s*/i, '')}</span>
					</button>
				))}
			</div>
			<div className={styles.panel}>
				<div className={styles.panelVisual}>
					<PatternVisual
						fallback={
							current === 2 ? 'triple' : current === 3 ? 'nested' : 'overlap'
						}
						style={active?.visualStyle}
					/>
				</div>
				<div className={styles.panelText}>
					<div className={styles.marker}>{active?.label}</div>
					<h3>{active?.title}</h3>
					<p>{active?.text}</p>
				</div>
			</div>
			<div className={styles.progress}>
				{entries.map((item, index) => (
					<button
						aria-label={`Go to item ${index + 1}`}
						className={index === current ? styles.activeDot : undefined}
						key={`${item.label}-dot-${index}`}
						onClick={() => setCurrent(index)}
						type="button"
					/>
				))}
			</div>
		</div>
	)
}
