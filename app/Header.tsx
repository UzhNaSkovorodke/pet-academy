import Image from 'next/image'
import * as React from 'react'

import CButton from '@/components/CButtons/CButton'

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
	return (
		<>
			<div className="flex justify-between my-12">
				<div className="flex justify-items-center">
					<Image
						src="logoIcon.svg"
						alt="there is a image"
						height={65}
						width={65}
					></Image>
					<div className="ml-4">
						<h1 className="font-extrabold text-4xl">sans</h1>
						<h2 className="font-medium text-2xl ">academy</h2>
					</div>
				</div>
				<CButton type="primary" text="Contact us" />
			</div>
		</>
	)
}

export default Header
