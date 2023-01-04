import Image from 'next/image'
import React from 'react'

import CButton from '@/components/CButtons/CButton'

import benefits3 from '@/assets/images/benefits3.png'
import benefits4 from '@/assets/images/benefits4.png'

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
				<hr />
				<h2 className="text-center text-base tablet:text-2xl laptop:text-2xl desktop:text-2xl font-bold py-28 tablet:pb-8 laptop:pb-10 desktop:pb-28">
					Наши преимущества
				</h2>
				<p className="font-bold text-lg tablet:text-2xl laptop:text-3xl desktop:text-3xl">
					Особый подход
				</p>
				<div className="flex flex-wrap justify-between items-center">
					<div className="w-1/2 py-12 font-normal text-lg">
						Мы имеем опыт работы в передовых компаниях: Яндекс, Huawei,
						Сбербанк, Тинькофф и др. Подскажем и поможем с самоопределением и
						профориентацией.
					</div>
					<div className="w-1/2 px-6 flex flex-wrap justify-evenly">
						<div className="w-full flex justify-evenly">
							<CButton text="Математика" type="secondary" />
							<CButton text="Английский" type="secondary" />
							<CButton text="Физика" type="secondary" />
						</div>
						<div className="w-full flex justify-evenly">
							<CButton text="Биология" type="secondary" />
							<CButton text="Химия" type="secondary" />
							<CButton text="Правоведение" type="secondary" />
						</div>
					</div>
				</div>
				<div className="flex flex-wrap justify-between items-center py-16">
					<div className="w-1/2 flex flex-wrap p-2 justify-center rounded-lg drop-shadow-md">
						<Image src={benefits4} width={650} height={650} alt="studymans" />
					</div>
					<div className="w-1/2 flex flex-wrap p-2 justify-center rounded-lg drop-shadow-2xl">
						<Image src={benefits3} width={650} height={650} alt="studymans" />
					</div>
				</div>
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
