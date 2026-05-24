import ActionLink from './actions'
import CardGrid from './card-grid'
import CircleVisual from './circle-visual'
import styles from './in.module.css'
import InvitationSection from './invitation-section'
import ItemGrid from './item-grid'
import PillList from './pill-list'
import SectionHeader from './section-header'
import TabbedPanel from './tabbed-panel'
import type { INCard, INItem } from './types'

type WorkshopHeroProps = {
	eyebrow?: string
	title?: string
	subtitle?: string
	lede?: string
	meta?: string[]
	primaryCta?: string
	secondaryCta?: string
}

export function WorkshopHero({
	eyebrow,
	title,
	subtitle,
	lede,
	meta = [],
	primaryCta,
	secondaryCta,
}: WorkshopHeroProps) {
	return (
		<div className={`${styles.section} ${styles.hero}`}>
			<div>
				{eyebrow ? <div className={styles.eyebrow}>{eyebrow}</div> : null}
				{title ? <h1>{title}</h1> : null}
				{subtitle ? <h2>{subtitle}</h2> : null}
				{lede ? <p className={styles.lede}>{lede}</p> : null}
				<PillList className={styles.metaList} items={meta} />
				<div className={styles.ctaRow}>
					<ActionLink href="#contact">{primaryCta}</ActionLink>
					<ActionLink href="#program" variant="secondary">
						{secondaryCta}
					</ActionLink>
				</div>
			</div>
			<div className={styles.visualWrap}>
				<CircleVisual variant="nested" />
				<span className={styles.caption}>The work begins inside</span>
			</div>
		</div>
	)
}

type IntentionsSectionProps = {
	eyebrow?: string
	title?: string
	intentions?: INItem[]
}

export function IntentionsSection({
	eyebrow,
	title,
	intentions,
}: IntentionsSectionProps) {
	return (
		<div className={styles.section}>
			<SectionHeader eyebrow={eyebrow} title={title} />
			<ItemGrid items={intentions} />
		</div>
	)
}

type PathwaySectionProps = {
	eyebrow?: string
	title?: string
	aside?: string
	stages?: INItem[]
}

export function PathwaySection({
	eyebrow,
	title,
	aside,
	stages,
}: PathwaySectionProps) {
	return (
		<div className={styles.section} id="program">
			<SectionHeader aside={aside} eyebrow={eyebrow} title={title} />
			<div className={styles.section}>
				<ItemGrid
					items={stages}
					renderVisual
					titleClassName={styles.stageFormula}
				/>
			</div>
		</div>
	)
}

type ThemesSectionProps = {
	eyebrow?: string
	title?: string
	themes?: INItem[]
}

export function ThemesSection({ eyebrow, title, themes }: ThemesSectionProps) {
	return (
		<div className={styles.section}>
			<SectionHeader eyebrow={eyebrow} title={title} />
			<TabbedPanel items={themes} />
		</div>
	)
}

type BarriersSectionProps = {
	title?: string
	barriers?: INItem[]
}

export function BarriersSection({
	title,
	barriers = [],
}: BarriersSectionProps) {
	const items = barriers ?? []

	return (
		<div className={styles.section}>
			{title ? <h2>{title}</h2> : null}
			<div className={styles.formatGrid}>
				{items.map((barrier, index) => (
					<div
						className={styles.barrier}
						key={barrier._key || `${barrier.title}-${index}`}
					>
						{barrier.label ? (
							<div className={styles.marker}>{barrier.label}</div>
						) : null}
						{barrier.title ? <h3>{barrier.title}</h3> : null}
						{barrier.text ? <p>{barrier.text}</p> : null}
					</div>
				))}
			</div>
		</div>
	)
}

type FormatSectionProps = {
	title?: string
	text?: string
	cards?: INItem[]
}

export function FormatSection({ title, text, cards = [] }: FormatSectionProps) {
	const items = cards ?? []

	return (
		<div className={styles.format}>
			<div className={`${styles.section} ${styles.splitHead}`}>
				<div>
					<div className={styles.marker}>Format</div>
					{title ? <h3>{title}</h3> : null}
					{text ? <p className={styles.lede}>{text}</p> : null}
				</div>
				<div className={styles.formatGrid}>
					{items.map((item, index) => (
						<div
							className={styles.formatCard}
							key={item._key || `${item.title}-${index}`}
						>
							{item.label ? (
								<div className={styles.marker}>{item.label}</div>
							) : null}
							{item.title ? <h3>{item.title}</h3> : null}
							{item.text ? <p>{item.text}</p> : null}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export function WorkshopClosing({
	quote,
	ctaLabel,
}: {
	quote?: string
	ctaLabel?: string
}) {
	return <InvitationSection ctaLabel={ctaLabel} id="contact" title={quote} />
}

const relatedOfferings: INCard[] = [
	{
		color: 'purple',
		label: 'Workshop',
		title: 'ME=WE Intensive',
		description:
			'A three-day gathering on the relationship between personal transformation and collective wellbeing.',
		actionLabel: 'Read more',
		meta: '3 days',
		compact: true,
	},
	{
		color: 'teal',
		label: 'Workshop',
		title: 'Community Circles',
		description:
			'Six weekly gatherings for people carrying service-oriented work in their own neighborhoods.',
		actionLabel: 'Read more',
		meta: '6 weeks',
		compact: true,
	},
	{
		color: 'blue',
		label: 'Practice',
		title: 'Dialogue Cards - v2',
		description:
			'A small deck of 36 prompts for circles, classrooms, and community suppers.',
		actionLabel: 'Download',
		meta: 'Free - PDF',
		compact: true,
	},
]

export function RelatedOfferingsSection() {
	return (
		<div className={styles.section}>
			<div className={styles.sectionHead}>
				<h3>Other workshops and practices</h3>
			</div>
			<CardGrid cards={relatedOfferings} className={styles.cardGrid} />
		</div>
	)
}
