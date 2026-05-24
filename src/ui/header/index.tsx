import { getSite } from '@/sanity/lib/queries'
import Logo from '@/ui/logo'
import css from './header.module.css'
import MenuGrid from './menu-grid'
import MobileToggle from './mobile-toggle'
import Navigation from './navigation'
import Wrapper from './wrapper'

type LanguageSelector = {
	enabled?: boolean
	languages?: {
		_key?: string
		label?: string
		href?: string
		active?: boolean
		disabled?: boolean
	}[]
}

export default async function () {
	const site = await getSite()
	const languageSelector = (site as any)?.languageSelector as
		| LanguageSelector
		| undefined
	const languages =
		languageSelector?.languages?.filter(
			(language) => language.label && !language.disabled,
		) ?? []
	const showLanguageSelector =
		languageSelector?.enabled === true && languages.length > 0

	return (
		<Wrapper className="fixed inset-x-0 top-0 z-[60] border-b border-black/10 bg-white/90 backdrop-blur-[14px] backdrop-saturate-150 transition-colors">
			<div className={`${css.root} grid items-center`}>
				<Logo className={css.brand} />

				<Navigation />

				<div className={css.actions}>
					{showLanguageSelector && (
						<div
							className={css.language}
							role="group"
							aria-label="Language selector"
						>
							{languages.map((language, index) => {
								const content = language.href ? (
									<a
										href={language.href}
										className={css.languageItem}
										aria-current={language.active ? 'true' : undefined}
									>
										{language.label}
									</a>
								) : (
									<span
										className={css.languageItem}
										aria-current={language.active ? 'true' : undefined}
									>
										{language.label}
									</span>
								)

								return (
									<span key={language._key ?? language.label}>
										{index > 0 && <span className={css.dot}>/</span>}
										{content}
									</span>
								)
							})}
						</div>
					)}
					<MobileToggle />
				</div>

				<MenuGrid items={site?.header?.items ?? undefined} />
			</div>
		</Wrapper>
	)
}
