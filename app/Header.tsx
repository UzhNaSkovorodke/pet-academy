import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
	return (
		<>
			<div className="flex justify-between my-12">
				<Link href="/">Главная</Link>
				<button>Contact us</button>
			</div>
		</>
	)
}

export default Header
