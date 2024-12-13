import { createSlice } from '@reduxjs/toolkit'

const trackSlice = createSlice({
  name: 'tracks',
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload)
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (track) => track.id !== action.payload.id
      )
    },
  },
})

export const { addToFavorites, removeFromFavorites } = trackSlice.actions
export default trackSlice.reducer
