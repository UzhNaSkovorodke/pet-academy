import Image from 'next/image'
import * as React from 'react'

import IconText from '@/components/IconText/IconText'
import TextImageContainer from '@/components/TextImageContainer/TextImageContainer'

import biology from '@/assets/images/biology.png'
import chemistry from '@/assets/images/chemistry.png'
import code from '@/assets/images/code.png'
import english from '@/assets/images/english.png'
import laywer from '@/assets/images/laywer.png'
import math from '@/assets/images/math.png'
import studymans from '@/assets/images/studymans.png'

interface ITitleSection {}

const TitleSection: React.FunctionComponent<ITitleSection> = (props) => {
	return (
		<div>
			<div className="py-40 tablet:py-40 laptop:py-40 desktop:py-48">
				<h2 className="text-center text-base tablet:text-base laptop:text-lg desktop:text-2xl font-bold pb-8">
					ДЕЛАЕМ ОБУЧЕНИЕ ДОСТУПНЕЕ
				</h2>
				<h1 className="text-center font-bold text-lg tablet:text-3xl laptop:text-4xl desktop:text-5xl px-28">
					Обучайтесь сложным знаниям легко и просто!
				</h1>
			</div>
			<TextImageContainer
				image={
					<div className="flex flex-wrap justify-center">
						<Image src={studymans} width={450} height={450} alt="studymans" />
					</div>
				}
				text="Мы команда преподавателей со стажем уже более 8 лет в разных сферах. Создание интересных обучающих материалов это наше призвание."
				type="textimg"
			/>
			<div className="flex flex-wrap justify-evenly">
				<IconText
					image={
						<Image
							src={english}
							width={50}
							height={50}
							alt="иконка английского"
						/>
					}
					title="Английский"
					subtitle="Составим программу обучения, исходя из ваших интересов, актуальных тем под ваши цели."
				/>
				<IconText
					image={
						<Image src={math} width={50} height={50} alt="иконка математики" />
					}
					title="Математика"
					subtitle="Объёмное обучение, содержащее курсы подготовки к ЕГЭ по математике и олимпиадам."
				/>
				<IconText
					image={
						<Image
							src={code}
							width={50}
							height={50}
							alt="иконка программирования"
						/>
					}
					title="Программирование"
					subtitle="Станьте разработчиком! Освойте базу программирование на выбранном вами языке."
				/>
				<IconText
					image={
						<Image src={laywer} width={50} height={50} alt="иконка права" />
					}
					title="Право"
					subtitle="Все темы по праву, задачи по гражданству РФ и ТК РФ, правовое регулирование и т.д"
				/>
				<IconText
					image={
						<Image src={chemistry} width={50} height={50} alt="иконка химии" />
					}
					title="Химия"
					subtitle="Химические реакции, свойства веществ, расчеты масс и эффектов в понятном индивидуальном материале"
				/>
				<IconText
					image={
						<Image src={biology} width={50} height={50} alt="иконка биологии" />
					}
					title="Биология"
					subtitle="Вся база по биологии. Тесты, конспекты и простое объяснение сложных тем."
				/>
			</div>
		</div>
	)
}

export default TitleSection
