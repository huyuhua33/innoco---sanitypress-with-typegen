import { Fraunces, Merriweather, Outfit, Roboto } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { preconnect } from 'react-dom'
import { cn } from '@/lib/utils'
import Footer from '@/ui/footer'
import Header from '@/ui/header'
import VisualEditing from '@/ui/modules/visual-editing'
import '@/app.css'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
	variable: '--font-roboto',
})

const merriweather = Merriweather({
	subsets: ['latin'],
	weight: ['300', '400', '700'],
	style: ['normal', 'italic'],
	variable: '--font-merriweather',
})

const outfit = Outfit({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	variable: '--font-outfit',
})

const fraunces = Fraunces({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	style: ['normal', 'italic'],
	variable: '--font-fraunces',
})

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	preconnect('https://cdn.sanity.io')

	return (
		<html lang="en" data-scroll-behavior="smooth">
			<NuqsAdapter>
				<body
					className={cn(
						roboto.variable,
						merriweather.variable,
						outfit.variable,
						fraunces.variable,
						'bg-background text-foreground antialiased',
					)}
				>
					<Header />
					<main className="pt-[var(--header-height,78px)]">{children}</main>
					<Footer />

					<VisualEditing />
				</body>
			</NuqsAdapter>
		</html>
	)
}
