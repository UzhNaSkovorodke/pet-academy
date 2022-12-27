import Link from 'next/link'
import React from 'react'

type Props = {}

const PostComponent = (props: Props) => {
	return (
		<>
			<p>PostComponent</p>
			<Link href="/">Главная</Link>
		</>
	)
}

export default PostComponent
