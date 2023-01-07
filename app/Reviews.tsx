import Image from 'next/image'
import * as React from 'react'

import Mail from '@/assets/icons/mail.svg'
import face1 from '@/assets/images/face1.png'
import face2 from '@/assets/images/face2.png'
import forfriends from '@/assets/images/forfriends.png'

interface IReviewsProps {}

const Reviews: React.FunctionComponent<IReviewsProps> = (props) => {
	return (
		<>
			<div className="flex flex-wrap justify-between items-center py-16">
				<div className="pl-2 flex justify-center rounded-lg drop-shadow-2xl">
					<Image
						src={forfriends}
						priority={true}
						width={400}
						height={400}
						alt="forfriends"
					/>
				</div>
				<div className="px-4 w-1/2 text-base tablet:text-base laptop:text-lg desktop:text-lg font-normal">
					<p className="font-normal text-center text-lg tablet:text-lg laptop:text-lg desktop:text-2xl">
						За каждого приведённого ученика заплатим Вам 2000₽
					</p>
					<p className="font-bold text-center text-lg tablet:text-lg laptop:text-lg desktop:text-2xl pt-4">
						(по 500₽ за занятие)
					</p>
					<p className="font-normal text-center text-lg tablet:text-lg laptop:text-lg desktop:text-2xl pt-4">
						А сам друг получит скидку 500₽ на второе занятие
					</p>
				</div>
			</div>
			<div className="flex justify-between items-center py-10">
				<p className="w-1/3 font-bold text-lg tablet:text-lg laptop:text-3xl desktop:text-3xl">
					Довольные клиенты
				</p>

				<p className="w-2/3 py-16 pl-4 font-normal text-2xl tablet:text-base laptop:text-lg desktop:text-2xl">
					Мы верим в процесс, всегда учимся и делаем все возможное, чтобы помочь
					вам освоить новые науки
				</p>
			</div>

			<div className="flex flex-wrap justify-between items-center py-16">
				<div className="w-1/4 flex justify-center drop-shadow-2xl">
					<Image src={face1} width={275} height={275} alt="лицо ученика" />
				</div>

				<div className="pl-8 w-3/4 text-base tablet:text-base laptop:text-lg desktop:text-lg font-normal">
					<p className="font-bold text-lg tablet:text-2xl laptop:text-2xl desktop:text-3xl">
						Алина
					</p>
					<p className="text-base">Помогли понять физику с 0</p>
					<p className="pt-10">
						Работая с quartz это как глоток свежего воздуха в обучении. Прошлые
						преподаватели душили меня старыми учебниками и методичками, но я
						никак не могла понять базу физики.
					</p>
					<p className="pt-10">
						В qartz учитель Андрей подобрал индивидуальный подход ко мне и смог
						обучить меня тому, что я не могла понять последние 2 года с дорогими
						репетиторами!
					</p>
				</div>
			</div>

			<div className="flex flex-wrap justify-between items-center py-10">
				<div className="w-1/4 flex justify-center drop-shadow-2xl">
					<Image src={face2} width={275} height={275} alt="лицо ученика" />
				</div>

				<div className="pl-8 w-3/4 text-base tablet:text-base laptop:text-lg desktop:text-lg font-normal">
					<p className="font-bold text-lg tablet:text-2xl laptop:text-2xl desktop:text-3xl">
						Лиза
					</p>
					<p className="text-base">Подготовили к ЕГЭ на 95 баллов</p>
					<p className="pt-10">
						Я не понимала профиль математики от слова совсем... К репетиторам ни
						разу не ходила и подруга посоветовала попробовать в qartz. Первый
						урок был бесплатный и мне очень понравилось как учитель винмательно
						относился ко мне.
					</p>
					<p className="pt-10">
						Сразу видно что через человека прошло много учеников. Спасибо за
						быструю подготовку, я до сих пор в шоке что сдала на 95 баллов.
					</p>
				</div>
			</div>

			<p className="text-center font-bold text-lg tablet:text-3xl laptop:text-4xl desktop:text-5xl pb-8 pt-30 tablet:pt-30 laptop:pt-30 desktop:pt-48">
				Готов обучаться с нами? Напиши нам.
			</p>
			<p className="text-center text-gray-500 text-lg tablet:text-lg laptop:text-2xl desktop:text-2xl pb-10">
				Не беспокойся, первый урок бесплатный) лучше попробовать чем не
				попробовать!
			</p>

			<div className="mb-30 tablet:mb-30 lambop:mb-30 desktop:mb-48 flex justify-center">
				<button className=" bg-indigo-700 hover:bg-indigo-900 text-white rounded-md font-bold">
					<div className="flex  py-4 px-4">
						<div className="pr-4">
							<Mail />
						</div>
						Напиши нам
					</div>
				</button>
			</div>
		</>
	)
}

export default Reviews
