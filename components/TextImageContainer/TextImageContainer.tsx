import * as React from 'react'

interface ITextImageContainerProps {
	text: string
	image: any
	type?: 'imgtext' | 'textimg'
}

const TextImageContainer: React.FunctionComponent<ITextImageContainerProps> = ({
	text,
	image,
	type
}) => {
	return (
		<>
			{type === 'imgtext' ? (
				<div className="flex justify-between items-center py-16">
					<div className="w-6/12 text-2xl font-normal">{text}</div>
					<div className="w-6/12">{image}</div>
				</div>
			) : (
				<div className="flex justify-between items-center py-16">
					<div className="w-6/12">{image}</div>
					<div className="w-6/12 text-2xl font-normal">{text}</div>
				</div>
			)}
		</>
	)
}

export default TextImageContainer
