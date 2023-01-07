import Image from 'next/image'
import * as React from 'react'

import CButton from '@/components/CButtons/CButton'

import benefits1 from '@/assets/images/benefits1.png'
import benefits2 from '@/assets/images/benefits2.png'
import benefits3 from '@/assets/images/benefits3.png'
import benefits4 from '@/assets/images/benefits4.png'
import dialog from '@/assets/images/dialog.png'

interface IBenefitsSectionProps {}

const BenefitsSection: React.FunctionComponent<
	IBenefitsSectionProps
> = ({}) => {
	return (
		<>
			<div className="bg-indigo-900 px-16 py-4 rounded-2xl text-white flex justify-center">
				<div className="w-1/3 text-center border-r-2 border-white">
					<p className="text-2xl tablet:text-lg laptop:text-lg desktop:text-2xl font-semibold">
						1.5k+
					</p>
					<p className="text-base tablet:text-base  laptop:text-base  desktop:text-lg font-semibold">
						Уроков
					</p>
				</div>

				<div className="w-1/3 text-center border-r-2 border-white">
					<p className="text-2xl tablet:text-lg laptop:text-lg desktop:text-2xl font-semibold">
						600+
					</p>
					<p className="text-base tablet:text-base  laptop:text-base  desktop:text-lg font-semibold">
						Учеников
					</p>
				</div>

				<div className="w-1/3 text-center">
					<p className="text-2xl tablet:text-lg laptop:text-lg desktop:text-2xl font-semibold">
						18+
					</p>
					<p className="text-base tablet:text-base  laptop:text-base  desktop:text-lg font-semibold">
						Преподавателей
					</p>
				</div>
			</div>
			<h2 className="text-center text-base tablet:text-2xl laptop:text-3xl desktop:text-3xl font-bold py-28 tablet:pb-8 laptop:pb-10 desktop:pb-28">
				Наши преимущества
			</h2>
			<p className="font-bold text-lg tablet:text-2xl laptop:text-3xl desktop:text-3xl pt-20">
				Особый подход
			</p>

			<div className="flex flex-wrap justify-between items-center">
				<p className="w-1/2 py-10 font-normal text-lg ">
					Мы имеем опыт работы в передовых компаниях: Яндекс, Huawei, Сбербанк,
					Тинькофф и др. Подскажем и поможем с самоопределением и
					профориентацией.
				</p>
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

			<div className="flex flex-wrap justify-between items-center py-16 px-20">
				<div className="w-1/2 h-auto flex flex-wrap p-2 justify-center drop-shadow-2xl hover:scale-110 duration-300 z-10 hover:z-20">
					<Image className="rounded-lg" src={benefits4} alt="фото компаний" />
				</div>
				<div className="w-1/2 flex flex-wrap p-2 justify-center drop-shadow-2xl hover:scale-110 duration-300 z-10">
					<Image
						className="rounded-lg"
						src={benefits3}
						alt="фото с конференции"
					/>
				</div>
				<div className="w-1/2 flex flex-wrap p-2 justify-center drop-shadow-2xl hover:scale-110 duration-300 hover:z-20">
					<Image
						className="rounded-lg"
						src={benefits2}
						alt="пример взаимодействия с учеником"
					/>
				</div>
				<div className="w-1/2 flex flex-wrap p-2 justify-center drop-shadow-2xl hover:scale-110 duration-300 z-10">
					<Image
						className="rounded-lg"
						src={benefits1}
						alt="общение с учеником"
					/>
				</div>
			</div>

			<div className="flex flex-wrap justify-between items-center py-16">
				<div className="pr-6 w-3/4 text-base tablet:text-base laptop:text-lg desktop:text-lg font-normal">
					<p className="font-bold text-lg tablet:text-2xl laptop:text-3xl desktop:text-3xl">
						Постоянная готовность
					</p>
					<p className="pt-10">
						Мы всегда на связи! Вопросы с ДЗ, по олимпиадам, самостоятельным и
						др. — ответим и поможем. А если вопрос будет интересным,
						преподаватель выложит развёрнутый видео-ответ на нашем YouTube
						канале.
					</p>
					<p className="pt-10">
						Мы всегда открыты к новым направлениям, мы развиваемся и не
						отказываемся от новых идей. Вы всегда можете обратиться с любым
						вопросом и предложением по почте <b>info@academy-qartz.ru</b>
					</p>
					<div className="pt-8">
						<CButton type="primary" text="Записаться на бесплатный урок" />
					</div>
				</div>
				<div className="pl-2 w-1/4 px-10 h-auto flex justify-center drop-shadow-2xl hover:scale-110 duration-300 z-10">
					<Image src={dialog} priority={true} alt="dialog" />
				</div>
			</div>
		</>
	)
}

export default BenefitsSection
