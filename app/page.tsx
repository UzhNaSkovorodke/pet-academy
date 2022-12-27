import React from 'react'

import Header from './Header'
import Footer from './footer'

type Props = {}

const page = (props: Props) => {
	return (
		<div className="mx-64">
			<Header />
			<main>main content</main>
			<Footer />
		</div>
	)
}

export default page
