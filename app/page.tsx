import React from 'react'

import BenefitsSection from './BenefitsSection'
import Footer from './Footer'
import Header from './Header'
import ReviewsSection from './ReviewsSection'
import TitleSection from './TitleSection'
import Fetch from './fetch'

type Props = {}

const page = (props: Props) => {
	return (
		<div className="px-4 tablet:px-6 laptop:px-40 desktop:px-60 bg-gradient-to-r from-white via-pink-50 to-white">
			<header>
				<Header />
			</header>
			<main>
				<TitleSection />
				<BenefitsSection />
				<ReviewsSection />
				<Fetch />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}

export default page
