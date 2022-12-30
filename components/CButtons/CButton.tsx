import Image from 'next/image'
import React from 'react'

import Mail from '../../assets/icons/mail.svg'

import './CButton.css'

interface Props {
	text: string // Text to be displayed on the button
	type?: 'primary' | 'secondary' // Optional prop to specify the type of button, default is primary
	onClick?: () => void // Optional click handler for the button, default is no-op function
}

const CButton: React.FC<Props> = ({ text, type = 'primary', onClick }) => (
	<button
		onClick={onClick}
		className={` text-base p-4 h-12 btn ${type}`}
		type="button"
	>
		<div className="flex">
			<div className="pr-4">
				<Mail />
			</div>
			{text}
		</div>
	</button>
)

export default CButton
