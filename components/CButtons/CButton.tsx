import React from 'react'

interface Props {
	text: string // Text to be displayed on the button
	type?: 'primary' | 'secondary' // Optional prop to specify the type of button, default is primary
	onClick?: () => void // Optional click handler for the button, default is no-op function
}

const CButton: React.FC<Props> = ({ text, type = 'primary' }) => (
	<button type="button">{text}</button>
)

export default CButton
