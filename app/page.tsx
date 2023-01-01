import Image from 'next/image'
import React from 'react'

import CButton from '@/components/CButtons/CButton'
import IconText from '@/components/IconText/IconText'
import TextImageContainer from '@/components/TextImageContainer/TextImageContainer'

import benefits1 from '@/assets/images/benefits1.png'
import benefits2 from '@/assets/images/benefits2.png'
import benefits3 from '@/assets/images/benefits3.png'
import benefits4 from '@/assets/images/benefits4.png'
import code from '@/assets/images/code.png'
import english from '@/assets/images/english.png'
import math from '@/assets/images/math.png'
import studymans from '@/assets/images/studymans.png'

import Footer from './Footer'
import Header from './Header'

type Props = {}

const page = (props: Props) => {
	return (
		<div className="mx-80">
			<Header />
			<main>
				<div className="py-28">
					<h2 className="text-center text-1xl font-bold pb-8">
						ДЕЛАЕМ ОБУЧЕНИЕ ДОСТУПНЕЕ
					</h2>
					<h1 className="text-center align-middle font-bold text-7xl px-32">
						Обучайтесь сложным знаниям легко и просто!
					</h1>
				</div>
				<TextImageContainer
					image={
						<div className="flex justify-center">
							<Image src={studymans} width={450} height={450} alt="studymans" />
						</div>
					}
					text="Мы команда преподавателей со стажем уже более 8 лет в разных сферах. Создание интересных обучающих материалов это наше призвание."
					type="imgtext"
				/>
				<div className="flex justify-evenly">
					<IconText
						image={
							<Image src={english} width={50} height={50} alt="englishIcon" />
						}
						title="Английский"
						subtitle="Составим программу обучения, исходя из ваших интересов, актуальных тем под ваши цели."
					/>
					<IconText
						image={<Image src={math} width={50} height={50} alt="math" />}
						title="Математика"
						subtitle="Объёмное обучение, содержащее курсы подготовки к ЕГЭ по математике и олимпиадам."
					/>
					<IconText
						image={<Image src={code} width={50} height={50} alt="studymans" />}
						title="Программирование"
						subtitle="Станьте разработчиком! Освойте базу программирование на выбранном вами языке."
					/>
				</div>
				<hr />
				<h2 className="text-center text-3xl font-bold py-28">
					Наши преимущества
				</h2>
				<p className="font-bold text-5xl">Особый подход</p>
				<div className="flex justify-between">
					<div className="w-1/2">
						Мы имеем опыт работы в передовых компаниях: Яндекс, Huawei,
						Сбербанк, Тинькофф и др., подскажем и поможем с самоопределением и
						профориентацией.
					</div>
					<div className="w-1/2">
						<CButton text="UI DESIGN" type="secondary" />
					</div>
				</div>
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
