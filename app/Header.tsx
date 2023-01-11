import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import logoicon from '@/assets/images/logoicon.png'
import mail from '@/assets/images/mail.png'

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
	return (
		<>
			<div className="flex justify-between py-12">
				<div className="flex justify-items-center">
					<div>
						<Image
							src={logoicon}
							alt="there is a image"
							height={60}
							width={60}
						/>
					</div>

					<div className="ml-2 tablet:ml-2 laptop:ml-2 desktop:ml-4">
						<p className="font-extrabold text-3xl tablet:text-base laptop:text-3xl desktop:text-3xl">
							quartz
						</p>
						<p className="font-medium text-base tablet:text-base laptop:text-base desktop:text-2xl">
							academy
						</p>
					</div>
				</div>

				<div>
					<button className=" bg-indigo-700 hover:bg-indigo-900 text-white py-4 px-4 rounded-md font-bold inline-block">
						<Link href={'/posts'}>
							<div className="flex">
								<div className="pr-4">
									<Image src={mail} width={30} height={30} alt="" />
								</div>
								<p className="flex items-center"> Напиши нам</p>
							</div>
						</Link>
					</button>
				</div>
			</div>
		</>
	)
}

export default Header
