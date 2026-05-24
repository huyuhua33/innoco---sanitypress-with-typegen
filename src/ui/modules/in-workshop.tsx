import type { InWorkshop as InWorkshopData } from '@/sanity/types'
import styles from '@/ui/in/in.module.css'
import {
	BarriersSection,
	FormatSection,
	IntentionsSection,
	PathwaySection,
	RelatedOfferingsSection,
	ThemesSection,
	WorkshopClosing,
	WorkshopHero,
} from '@/ui/in/workshop-sections'
import { moduleAttributes, type ModuleProps } from '.'

type INWorkshopProps = Omit<InWorkshopData, 'workshop'> &
	ModuleProps & {
		workshop?: Partial<InWorkshopData>
	}

export default function INWorkshop({ workshop, ...props }: INWorkshopProps) {
	const workshopContent =
		workshop && typeof workshop === 'object' ? workshop : {}
	const {
		eyebrow,
		title,
		subtitle,
		lede,
		meta = [],
		primaryCta,
		secondaryCta,
		intentionsEyebrow,
		intentionsTitle,
		intentions = [],
		pathwayEyebrow,
		pathwayTitle,
		pathwayAside,
		stages = [],
		themesEyebrow,
		themesTitle,
		themes = [],
		barriersTitle,
		barriers = [],
		formatTitle,
		formatText,
		formatCards = [],
		closingQuote,
	} = {
		...props,
		...workshopContent,
	}

	return (
		<section className={styles.root} {...moduleAttributes(props)}>
			<WorkshopHero
				eyebrow={eyebrow}
				lede={lede}
				meta={meta}
				primaryCta={primaryCta}
				secondaryCta={secondaryCta}
				subtitle={subtitle}
				title={title}
			/>
			<IntentionsSection
				eyebrow={intentionsEyebrow}
				intentions={intentions}
				title={intentionsTitle}
			/>
			<PathwaySection
				aside={pathwayAside}
				eyebrow={pathwayEyebrow}
				stages={stages}
				title={pathwayTitle}
			/>
			<ThemesSection
				eyebrow={themesEyebrow}
				themes={themes}
				title={themesTitle}
			/>
			<BarriersSection barriers={barriers} title={barriersTitle} />
			<FormatSection
				cards={formatCards}
				text={formatText}
				title={formatTitle}
			/>
			<WorkshopClosing ctaLabel={primaryCta} quote={closingQuote} />
			<RelatedOfferingsSection />
		</section>
	)
}
