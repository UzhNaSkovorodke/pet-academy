import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

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

			<div className="flex justify-between items-center py-16">
				<div className="text-base tablet:text-base laptop:text-lg desktop:text-2xl font-normal mr-10">
					Мы команда преподавателей со стажем уже более 8 лет в разных сферах.
					Создание интересных обучающих материалов это наше призвание.
				</div>

				<div className="w-1/2 h-auto flex flex-wrap justify-center">
					<Image src={studymans} alt="studymans" />
				</div>
			</div>

			<div className="flex flex-wrap justify-evenly">
				<div className="w-4/12 py-16 relative">
					<div className="bg-white w-16 h-16 absolute bottom-0 top-8 z-0 left-0 rounded-lg drop-shadow-2xl" />
					<Link href={'/posts'}>
						<div className="absolute z-10 bottom-0 top-10 left-2 right-0">
							<Image
								className="cursor-pointer hover:scale-105"
								src={english}
								width={50}
								height={50}
								alt="иконка английского"
							/>
						</div>
					</Link>

					<p className="font-bold text-lg tablet:text-base laptop:text-lg desktop:text-2xl pt-16 pb-4 pr-1">
						Английский
					</p>
					<p className="text-stone-500 font-normal text-base tablet:text-sm laptop:text-base desktop:text-lg pr-10">
						Составим программу обучения, исходя из ваших интересов, актуальных
						тем под ваши цели.
					</p>
				</div>

				<div className="w-4/12 py-16 relative">
					<div className="bg-white w-16 h-16 absolute bottom-0 top-8 z-0 left-0 rounded-lg drop-shadow-2xl" />
					<Link href={'/posts'}>
						<div className="absolute z-10 bottom-0 top-10 left-2 right-0">
							<Image
								className="cursor-pointer hover:scale-105"
								src={math}
								width={50}
								height={50}
								alt="иконка математики"
							/>
						</div>
					</Link>

					<p className="font-bold text-lg tablet:text-base laptop:text-lg desktop:text-2xl pt-16 pb-4 pr-1">
						Математика
					</p>
					<p className="text-stone-500 font-normal text-base tablet:text-sm laptop:text-base desktop:text-lg pr-10">
						Объёмное обучение, содержащее курсы подготовки к ЕГЭ по математике и
						олимпиадам.
					</p>
				</div>

				<div className="w-4/12 py-16 relative">
					<div className="bg-white w-16 h-16 absolute bottom-0 top-8 z-0 left-0 rounded-lg drop-shadow-2xl" />
					<Link href={'/posts'}>
						<div className="absolute z-10 bottom-0 top-10 left-2 right-0">
							<Image
								className="cursor-pointer hover:scale-105"
								src={code}
								width={50}
								height={50}
								alt="иконка программирования"
							/>
						</div>
					</Link>

					<p className="font-bold text-lg tablet:text-base laptop:text-lg desktop:text-2xl pt-16 pb-4 pr-1">
						Программирование
					</p>
					<p className="text-stone-500 font-normal text-base tablet:text-sm laptop:text-base desktop:text-lg pr-10">
						Станьте разработчиком! Освойте базу программирование на выбранном
						вами языке.
					</p>
				</div>

				<div className="w-4/12 py-16 relative">
					<div className="bg-white w-16 h-16 absolute bottom-0 top-8 z-0 left-0 rounded-lg drop-shadow-2xl" />
					<Link href={'/posts'}>
						<div className="absolute z-10 bottom-0 top-10 left-2 right-0">
							<Image
								src={laywer}
								width={50}
								className="cursor-pointer hover:scale-105"
								height={50}
								alt="иконка права"
							/>
						</div>
					</Link>

					<p className="font-bold text-lg tablet:text-base laptop:text-lg desktop:text-2xl pt-16 pb-4 pr-1">
						Право
					</p>
					<p className="text-stone-500 font-normal text-base tablet:text-sm laptop:text-base desktop:text-lg pr-10">
						Все темы по праву, задачи по гражданству РФ и ТК РФ, правовое
						регулирование и т.д
					</p>
				</div>

				<div className="w-4/12 py-16 relative">
					<div className="bg-white w-16 h-16 absolute bottom-0 top-8 z-0 left-0 rounded-lg drop-shadow-2xl" />
					<Link href={'/posts'}>
						<div className="absolute z-10 bottom-0 top-10 left-2 right-0">
							<Image
								className="cursor-pointer hover:scale-105"
								src={chemistry}
								width={50}
								height={50}
								alt="иконка химии"
							/>
						</div>
					</Link>

					<p className="font-bold text-lg tablet:text-base laptop:text-lg desktop:text-2xl pt-16 pb-4 pr-1">
						Химия
					</p>
					<p className="text-stone-500 font-normal text-base tablet:text-sm laptop:text-base desktop:text-lg pr-10">
						Химические реакции, свойства веществ, расчеты масс и эффектов в
						понятном индивидуальном материале
					</p>
				</div>

				<div className="w-4/12 py-16 relative">
					<div className="bg-white w-16 h-16 absolute bottom-0 top-8 z-0 left-0 rounded-lg drop-shadow-2xl" />
					<Link href={'/posts'}>
						<div className="absolute z-10 bottom-0 top-10 left-2 right-0">
							<Image
								className="cursor-pointer hover:scale-105"
								src={biology}
								width={50}
								height={50}
								alt="иконка биологии"
							/>
						</div>
					</Link>

					<p className="font-bold text-lg tablet:text-base laptop:text-lg desktop:text-2xl pt-16 pb-4 pr-1">
						Биология
					</p>
					<p className="text-stone-500 font-normal text-base tablet:text-sm laptop:text-base desktop:text-lg pr-10">
						Вся база по биологии. Тесты, конспекты и простое объяснение сложных
						тем.
					</p>
				</div>
			</div>
		</div>
	)
}

export default TitleSection
