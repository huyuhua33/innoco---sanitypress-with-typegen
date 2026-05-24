import { PortableText } from 'next-sanity'
import { getSite } from '@/sanity/lib/queries'
import css from './footer.module.css'
import Navigation from './navigation'

export default async function () {
	const site = await getSite()

	return (
		<footer className={css.root}>
			<div className={css.inner}>
				<div className={css.top}>
					<div>
						<div className={css.ask}>
							<em>What kind of ancestor</em>
							<br />
							do we want to be?
						</div>
					</div>

					<div className={css.nav}>
						<Navigation />
					</div>
				</div>

				<div className={css.bottom}>
					<span>{site?.title ?? 'INNOCO'} · A studio for shared growth</span>
					<span>
						<PortableText value={site?.copyright ?? []} />
					</span>
				</div>
			</div>
		</footer>
	)
}
