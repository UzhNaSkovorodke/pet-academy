import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './Slicers/counterSlice'

export default configureStore({
	reducer: {
		counter: counterReducer
	}
})
