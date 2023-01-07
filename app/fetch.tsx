'use client'

import * as React from 'react'
import { useEffect } from 'react'

interface IFetchProps {}

const url = 'https://jsonplaceholder.typicode.com/todos/1'
let zalupa: any = []

const Fetch: React.FunctionComponent<IFetchProps> = (props) => {
	useEffect(() => {
		console.log(
			fetch(url)
				.then((response) => response.json())
				.catch((error) => console.log(error))
				.then((json) => console.log(json))
		)
	})

	return (
		<div>
			<p>dsd</p>
		</div>
	)
}

export default Fetch
