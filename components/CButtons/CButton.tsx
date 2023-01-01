import React from 'react'

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
		<div className="flex">{text}</div>
	</button>
)

export default CButton
