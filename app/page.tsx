import React from 'react'

import Footer from './Footer'
import Header from './Header'

type Props = {}

const page = (props: Props) => {
	return (
		<div className="mx-72">
			<Header />
			<main>
				<div className="py-36">
					<h2 className="text-center text-1xl font-bold">
						ДЕЛАЕМ ОБУЧЕНИЕ ДОСТУПНЕЕ
					</h2>
					<h1 className="text-center align-middle font-bold text-7xl px-32">
						Получите сложные знания легко и просто!
					</h1>
				</div>
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
