import Image from 'next/image'
import * as React from 'react'

import Mail from '@/assets/icons/mail.svg'

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
	return (
		<>
			<div className="flex justify-between my-12">
				<div className="flex justify-items-center">
					<div>
						<Image
							src="logoIcon.svg"
							alt="there is a image"
							height={65}
							width={65}
						/>
					</div>
					<div className="ml-4">
						<p className="font-extrabold text-4xl">sans</p>
						<p className="font-medium text-2xl ">academy</p>
					</div>
				</div>

				<div>
					<button className=" bg-indigo-700 hover:bg-indigo-900 text-white py-4 px-4 rounded-md font-bold inline-block">
						<div className="flex">
							<div className="pr-4">
								<Mail />
							</div>
							Contact us
						</div>
					</button>
				</div>
			</div>
		</>
	)
}

export default Header
