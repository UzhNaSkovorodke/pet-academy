import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import gmail from '@/assets/images/gmail.png'
import logoicon from '@/assets/images/logoicon.png'
import telegram from '@/assets/images/telegram.png'
import whatsapp from '@/assets/images/whatsapp.png'
import youtube from '@/assets/images/youtube.png'

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
	return (
		<>
			<div className="flex justify-between py-8 items-center">
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

				<div className="flex justify-evenly">
					<Link href={'/posts'}>
						<div className="pr-4 cursor-pointer">
							<Image
								src={telegram}
								alt="there is a image"
								height={45}
								width={45}
							/>
						</div>
					</Link>
					<Link href={'/posts'}>
						<div className="pr-4 cursor-pointer">
							<Image
								src={youtube}
								alt="there is a image"
								height={45}
								width={45}
							/>
						</div>
					</Link>
					<Link href={'/posts'}>
						<div className="pr-4 cursor-pointer">
							<Image
								src={whatsapp}
								alt="there is a image"
								height={45}
								width={45}
							/>
						</div>
					</Link>
				</div>
			</div>
			<div className="pb-16 flex justify-between items-center">
				<p className="text-base">© 2021 qartz academy. All Rights Reserved.</p>
				<Link href={'/posts'}>
					<div className="flex justify-evenly">
						<div className="pr-2 cursor-pointer">
							<Image
								src={gmail}
								alt="there is a image"
								height={45}
								width={45}
							/>
						</div>
						<p className="flex items-center font-semibold">
							info@academy-qartz.ru
						</p>
					</div>
				</Link>
			</div>
		</>
	)
}

export default Footer
