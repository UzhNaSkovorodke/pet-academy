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
			{type === 'textimg' ? (
				<div className="flex flex-wrap justify-between items-center py-16">
					<div className="w-1/2 text-base tablet:text-base laptop:text-lg desktop:text-lg font-normal">
						{text}
					</div>

					<div className="w-1/2">{image}</div>
				</div>
			) : (
				<div className="flex flex-wrap justify-between items-center py-16">
					<div className="w-1/2">{image}</div>
					<div className="w-1/2 text-base tablet:text-base laptop:text-lg desktop:text-lg font-normal">
						{text}
					</div>
				</div>
			)}
		</>
	)
}

export default TextImageContainer
