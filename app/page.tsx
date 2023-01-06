import React from 'react'

import BenefitsSection from './BenefitsSection'
import Footer from './Footer'
import Header from './Header'
import TitleSection from './TitleSection'

type Props = {}

const page = (props: Props) => {
	return (
		<div className="mx-4 tablet:mx-10 laptop:mx-40 desktop:mx-60">
			<Header />
			<main>
				<TitleSection />
				<BenefitsSection />
				<div>отзывы</div>
				<div>почта</div>
				<div>End title</div>
				<button>Компонент кнопка</button>
			</main>
			<Footer />
		</div>
	)
}

export default page
