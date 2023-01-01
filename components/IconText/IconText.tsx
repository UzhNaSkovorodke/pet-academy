import * as React from 'react'

interface IIconTextProps {
	image: any
	title: string
	subtitle: string
}

const IconText: React.FunctionComponent<IIconTextProps> = ({
	image,
	title,
	subtitle
}) => {
	return (
		<div className="w-4/12 pt-20 pb-28 relative">
			<div className="bg-white w-16 h-16 absolute bottom-0 top-8 z-0 left-0 rounded-lg drop-shadow-2xl"></div>
			<div className="absolute z-10 bottom-0 top-10 left-2 right-0">
				{image}
			</div>

			<p className="font-bold text-2xl pt-10 pb-4 pr-1">{title}</p>
			<p className="text-stone-500 font-normal pr-6">{subtitle}</p>
		</div>
	)
}

export default IconText
