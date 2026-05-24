import css from './header.module.css'

export default function () {
	return (
		<label className={css.menuButton} aria-label="Open menu">
			<input id="header-open" type="checkbox" hidden />
			<span className={css.menuBars} aria-hidden="true">
				<span />
				<span />
			</span>
		</label>
	)
}
