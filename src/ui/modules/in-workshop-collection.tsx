import type { InWorkshopCollection as InWorkshopCollectionData } from '@/sanity/types'
import styles from '@/ui/in/in.module.css'
import LandingFeedSearch from '@/ui/in/landing-feed-search'
import SectionHeader from '@/ui/in/section-header'
import type { INCard } from '@/ui/in/types'
import { moduleAttributes, type ModuleProps } from '.'

type INWorkshopCollectionProps = Omit<InWorkshopCollectionData, 'workshops'> &
	ModuleProps & {
		workshops?: INCard[]
	}

export default function INWorkshopCollection({
	eyebrow,
	title,
	intro,
	searchPlaceholder,
	filters = [],
	workshops = [],
	...props
}: INWorkshopCollectionProps) {
	return (
		<section className={styles.root} {...moduleAttributes(props)}>
			<div className={styles.section}>
				<SectionHeader aside={intro} eyebrow={eyebrow} title={title} />
				<LandingFeedSearch
					cards={workshops}
					filters={filters}
					placeholder={searchPlaceholder || 'Search workshops'}
				/>
			</div>
		</section>
	)
}
