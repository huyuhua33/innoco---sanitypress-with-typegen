import { PortableText } from 'next-sanity'
import CardGrid from './card-grid'
import CircleVisual from './circle-visual'
import styles from './in.module.css'
import InvitationSection from './invitation-section'
import ItemGrid from './item-grid'
import PatternVisual from './pattern-visual'
import SectionHeader from './section-header'
import TabbedPanel from './tabbed-panel'
import type { INCard, INItem } from './types'

type PortableBlock = Parameters<typeof PortableText>[0]['value']

type MeweHeroProps = {
	eyebrow?: string
	title?: string
	lede?: string
}

export function MeweHero({ eyebrow, title, lede }: MeweHeroProps) {
	return (
		<div className={`${styles.section} ${styles.hero}`}>
			<div>
				{eyebrow ? <div className={styles.eyebrow}>{eyebrow}</div> : null}
				{title ? <h1>{title}</h1> : null}
				{lede ? <p className={styles.lede}>{lede}</p> : null}
			</div>
			<div className={styles.visualWrap}>
				<CircleVisual />
				<span className={styles.caption}>One shared field</span>
			</div>
		</div>
	)
}

type MeweEssayProps = {
	marker?: string
	title?: string
	essay?: PortableBlock
}

export function MeweEssay({ marker, title, essay }: MeweEssayProps) {
	return (
		<div className={`${styles.section} ${styles.essay}`}>
			{marker ? <div className={styles.marker}>{marker}</div> : null}
			{title ? <h2>{title}</h2> : null}
			{essay ? (
				<div className="prose">
					<PortableText value={essay} />
				</div>
			) : null}
		</div>
	)
}

type ResonanceSectionProps = {
	marker?: string
	title?: string
	quote?: string
	items?: INItem[]
}

export function ResonanceSection({
	marker,
	title,
	quote,
	items = [],
}: ResonanceSectionProps) {
	const entries = items ?? []

	return (
		<div className={styles.resonance}>
			<div className={styles.section}>
				<SectionHeader
					aside={quote}
					eyebrow={marker}
					title={title}
					titleAs="h3"
				/>
				<div className={`${styles.resGrid} ${styles.section}`}>
					{entries.map((item, index) => (
						<div
							className={styles.resItem}
							key={item._key || `${item.title}-${index}`}
						>
							<div className={styles.stageVisual}>
								<PatternVisual
									fallback={index === 2 ? 'triple' : 'overlap'}
									style={item.visualStyle}
								/>
							</div>
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

type ExperienceSectionProps = {
	marker?: string
	title?: string
	aside?: string
	stages?: INItem[]
}

export function ExperienceSection({
	marker,
	title,
	aside,
	stages,
}: ExperienceSectionProps) {
	return (
		<div className={styles.section}>
			<SectionHeader
				aside={aside}
				eyebrow={marker}
				title={title}
				titleAs="h3"
			/>
			<div className={styles.section}>
				<ItemGrid
					className={styles.experienceStages}
					items={stages}
					renderVisual
					titleClassName={styles.stageFormula}
				/>
			</div>
		</div>
	)
}

type MeweJourneySectionProps = {
	marker?: string
	title?: string
	aside?: string
	items?: INItem[]
}

export function MeweJourneySection({
	marker,
	title,
	aside,
	items = [],
}: MeweJourneySectionProps) {
	const entries = items ?? []

	if (!entries.length) return null

	return (
		<div className={styles.section}>
			<SectionHeader
				aside={aside}
				eyebrow={marker}
				title={title}
				titleAs="h3"
			/>
			<TabbedPanel items={entries} variant="slides" />
		</div>
	)
}

type MeweCardsSectionProps = {
	cards?: INCard[]
}

export function MeweCardsSection({ cards = [] }: MeweCardsSectionProps) {
	const entries = cards ?? []

	if (!entries.length) return null

	return (
		<div className={styles.section}>
			<CardGrid cards={entries} className={styles.cardGrid} />
		</div>
	)
}

type MattersSectionProps = {
	marker?: string
	title?: string
	text?: string
}

export function MattersSection({ marker, title, text }: MattersSectionProps) {
	return (
		<div className={styles.matters}>
			<div className={`${styles.section} ${styles.hero}`}>
				<div className={styles.visualWrap}>
					<CircleVisual variant="nested" />
				</div>
				<div>
					{marker ? <div className={styles.marker}>{marker}</div> : null}
					{title ? <h3>{title}</h3> : null}
					{text ? <p className={styles.lede}>{text}</p> : null}
				</div>
			</div>
		</div>
	)
}

export { InvitationSection as MeweInvitation }
