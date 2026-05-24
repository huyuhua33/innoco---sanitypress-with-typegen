import type { ReactNode } from 'react'
import styles from './in.module.css'

type ActionLinkProps = {
	children?: ReactNode
	href: string
	variant?: 'primary' | 'secondary'
}

export default function ActionLink({
	children,
	href,
	variant = 'primary',
}: ActionLinkProps) {
	if (!children) return null

	return (
		<a
			className={variant === 'primary' ? styles.button : styles.linkButton}
			href={href}
		>
			{children} -&gt;
		</a>
	)
}
