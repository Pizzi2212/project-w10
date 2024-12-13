import { configureStore } from '@reduxjs/toolkit'
import trackReducer from './trackSlice'

const store = configureStore({
  reducer: {
    tracks: trackReducer,
  },
})

export default store
