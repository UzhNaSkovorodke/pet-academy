import React from 'react'

import Footer from './Footer'
import Header from './Header'

type Props = {}

const page = (props: Props) => {
	return (
		<div className="mx-64">
			<Header />
			<main>
				<div>Ttile</div>
				<div>Two side component text-image</div>
				<div>grid icons</div>
				<hr />
				<div>Two side component text-text</div>
				<div>Two side component text-buttons</div>
				<div>Two side component image-image</div>
				<div>Two side component text-buttons</div>
				<div>Two side component image-image</div>
				<div>Two side component text-buttons</div>
				<div>Two side component image-image</div>
				<div>Two side component text-text</div>
				<div>Two side component image-text</div>
				<div>Ent title</div>
				<button>Компонент кнопка</button>
			</main>
			<Footer />
		</div>
	)
}

export default page
