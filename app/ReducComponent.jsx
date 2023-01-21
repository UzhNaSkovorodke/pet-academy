import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ReducComponent() {
	const count = useSelector((state) => state.counter.value)
	const dispatch = useDispatch()

	return <div>{count}</div>
}

export default ReducComponent
