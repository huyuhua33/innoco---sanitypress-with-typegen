import type { InMewe as InMeweData } from '@/sanity/types'
import styles from '@/ui/in/in.module.css'
import {
	ExperienceSection,
	MattersSection,
	MeweCardsSection,
	MeweEssay,
	MeweHero,
	MeweInvitation,
	MeweJourneySection,
	ResonanceSection,
} from '@/ui/in/mewe-sections'
import { moduleAttributes, type ModuleProps } from '.'

type INMeweProps = InMeweData & ModuleProps

export default function INMewe({
	eyebrow,
	title,
	lede,
	essayMarker,
	essayTitle,
	essay,
	resonanceMarker,
	resonanceTitle,
	resonanceItems = [],
	resonanceQuote,
	journeyMarker,
	journeyTitle,
	journeyAside,
	journeyItems = [],
	experienceMarker,
	experienceTitle,
	experienceAside,
	stages = [],
	cards = [],
	mattersMarker,
	mattersTitle,
	mattersText,
	invitationMarker,
	invitationTitle,
	invitationText,
	ctaLabel,
	...props
}: INMeweProps) {
	return (
		<section className={styles.root} {...moduleAttributes(props)}>
			<MeweHero eyebrow={eyebrow} lede={lede} title={title} />
			<MeweEssay essay={essay} marker={essayMarker} title={essayTitle} />
			<ResonanceSection
				items={resonanceItems}
				marker={resonanceMarker}
				quote={resonanceQuote}
				title={resonanceTitle}
			/>
			<MeweJourneySection
				aside={journeyAside}
				items={journeyItems}
				marker={journeyMarker}
				title={journeyTitle}
			/>
			<ExperienceSection
				aside={experienceAside}
				marker={experienceMarker}
				stages={stages}
				title={experienceTitle}
			/>
			<MeweCardsSection cards={cards} />
			<MattersSection
				marker={mattersMarker}
				text={mattersText}
				title={mattersTitle}
			/>
			<MeweInvitation
				ctaLabel={ctaLabel}
				eyebrow={invitationMarker}
				href="/metanoia"
				text={invitationText}
				title={invitationTitle}
			/>
		</section>
	)
}
