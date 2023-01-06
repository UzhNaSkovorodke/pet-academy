import Image from 'next/image'
import * as React from 'react'

import CButton from '@/components/CButtons/CButton'
import TextImageContainer from '@/components/TextImageContainer/TextImageContainer'

import benefits1 from '@/assets/images/benefits1.png'
import benefits2 from '@/assets/images/benefits2.png'
import benefits3 from '@/assets/images/benefits3.png'
import benefits4 from '@/assets/images/benefits4.png'
import dialog from '@/assets/images/dialog.png'
import forfriends from '@/assets/images/forfriends.png'

interface IBenefitsSectionProps {}

const BenefitsSection: React.FunctionComponent<
	IBenefitsSectionProps
> = ({}) => {
	return (
		<div>
			<hr />
			<h2 className="text-center text-base tablet:text-2xl laptop:text-3xl desktop:text-3xl font-bold py-28 tablet:pb-8 laptop:pb-10 desktop:pb-28">
				Наши преимущества
			</h2>
			<p className="font-bold text-lg tablet:text-2xl laptop:text-3xl desktop:text-3xl">
				Особый подход
			</p>

			<div className="flex flex-wrap justify-between items-center">
				<div className="w-1/2 py-12 font-normal text-lg">
					Мы имеем опыт работы в передовых компаниях: Яндекс, Huawei, Сбербанк,
					Тинькофф и др. Подскажем и поможем с самоопределением и
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

			<div className="flex flex-wrap justify-between items-center  py-16">
				<div className="w-1/2 flex flex-wrap p-2 justify-center rounded-lg drop-shadow-2xl">
					<Image src={benefits4} width={650} height={650} alt="studymans" />
				</div>
				<div className="w-1/2 flex flex-wrap p-2 justify-center rounded-lg drop-shadow-2xl">
					<Image src={benefits3} width={650} height={650} alt="studymans" />
				</div>
				<div className="w-1/2 flex flex-wrap p-2 justify-center rounded-lg drop-shadow-2xl">
					<Image src={benefits2} width={650} height={650} alt="studymans" />
				</div>
				<div className="w-1/2 flex flex-wrap p-2 justify-center rounded-lg drop-shadow-2xl">
					<Image src={benefits1} width={650} height={650} alt="studymans" />
				</div>
			</div>

			<div className="flex flex-wrap justify-between items-center py-16">
				<div className="pr-4 w-2/3 text-base tablet:text-base laptop:text-lg desktop:text-lg font-normal">
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
				<div className="w-1/3 pl-2 flex justify-center rounded-lg drop-shadow-2xl">
					<Image src={dialog} width={300} height={300} alt="dialog" />
				</div>
			</div>

			<div className="flex flex-wrap justify-between items-center py-16">
				<div className="w-1/2 pl-2 flex justify-center rounded-lg drop-shadow-2xl">
					<Image src={forfriends} width={400} height={400} alt="forfriends" />
				</div>
				<div className="px-4 w-1/2 text-base tablet:text-base laptop:text-lg desktop:text-lg font-normal">
					<p className="font-semibold text-center text-lg tablet:text-2xl laptop:text-2xl desktop:text-2xl">
						Рекомендуйте нас друзьям и знакомым. За каждого приведённого ученика
						заплатим Вам 2000₽ (по 500₽ после каждых пяти занятий), а сам друг
						получит скидку 500₽ на второе занятие
					</p>
					<p>переделать под стиль человечков в начале</p>
				</div>
			</div>
		</div>
	)
}

export default BenefitsSection
