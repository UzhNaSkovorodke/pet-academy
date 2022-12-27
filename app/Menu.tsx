import Link from 'next/link'
import React from 'react'

type Props = {}

const Menu = (props: Props) => {
	return (
		<>
			<Link href="/">Главная</Link>
			<br />
			<Link href="/posts">Посты</Link>
		</>
	)
}

export default Menu
