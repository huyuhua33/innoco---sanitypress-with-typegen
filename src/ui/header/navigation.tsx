import { cn } from '@/lib/utils'
import { getSite } from '@/sanity/lib/queries'
import type { LinkList, Megamenu as MegamenuType } from '@/sanity/types'
import SanityLink, { type SanityLinkType } from '@/ui/sanity-link'
import Dropdown from './dropdown'
import Megamenu from './megamenu'

const topLevelClassName = cn(
	'relative py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#111] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#e33283] after:transition-transform after:duration-300 hover:after:scale-x-100 md:text-[12px] md:tracking-[0.16em]',
)

export default async function () {
	const site = await getSite()

	return (
		<nav className="hidden items-stretch justify-center gap-x-[38px] [grid-area:navigation] lg:flex">
			{site?.header?.items?.map((item) => {
				switch (item._type) {
					case 'link':
						return (
							<SanityLink
								link={item as SanityLinkType}
								className={topLevelClassName}
								key={item._key}
							/>
						)

					case 'link.list':
						return (
							<Dropdown
								{...(item as LinkList & { _key: string })}
								summaryClassName={topLevelClassName}
								key={item._key}
							/>
						)

					case 'megamenu':
						return (
							<Megamenu
								{...(item as MegamenuType)}
								summaryClassName={topLevelClassName}
								key={item._key}
							/>
						)

					default:
						return null
				}
			})}
		</nav>
	)
}
