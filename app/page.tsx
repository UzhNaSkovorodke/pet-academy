import React from 'react'

import BenefitsSection from './BenefitsSection'
import Footer from './Footer'
import Header from './Header'
import Reviews from './Reviews'
import TitleSection from './TitleSection'

type Props = {}

const page = (props: Props) => {
	return (
		<div className="px-4 tablet:px-10 laptop:px-40 desktop:px-60 bg-gradient-to-r from-white via-pink-50 to-white">
			<header>
				<Header />
			</header>
			<main>
				<TitleSection />
				<BenefitsSection />
				<Reviews />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}

export default page
