import Image from 'next/image'
import * as React from 'react'

import CButton from '@/components/CButtons/CButton'

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
				<CButton type="primary" text="Contact us" />
			</div>
		</>
	)
}

export default Header
