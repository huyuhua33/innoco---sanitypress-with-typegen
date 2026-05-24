import type { InLanding as InLandingData } from '@/sanity/types'
import styles from '@/ui/in/in.module.css'
import {
	LandingFeed,
	LandingHero,
	LandingStory,
} from '@/ui/in/landing-sections'
import { moduleAttributes, type ModuleProps } from '.'

type INLandingProps = InLandingData & ModuleProps

export default function INLanding({
	eyebrow,
	title,
	subtitle,
	metaLeft,
	metaRight,
	sectionTitle,
	sectionNote,
	searchPlaceholder,
	filters = [],
	cards = [],
	storyEyebrow,
	storyTitle,
	storyText,
	...props
}: INLandingProps) {
	return (
		<section className={styles.root} {...moduleAttributes(props)}>
			<LandingHero
				eyebrow={eyebrow}
				metaLeft={metaLeft}
				metaRight={metaRight}
				subtitle={subtitle}
				title={title}
			/>
			<LandingFeed
				cards={cards}
				filters={filters}
				sectionNote={sectionNote}
				sectionTitle={sectionTitle}
				searchPlaceholder={searchPlaceholder}
			/>
			<LandingStory
				eyebrow={storyEyebrow}
				text={storyText}
				title={storyTitle}
			/>
		</section>
	)
}
