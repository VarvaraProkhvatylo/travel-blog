import { configureStore } from '@reduxjs/toolkit'
import likeSlice from './likeSlice'

export const store = configureStore({
  reducer: {
    articlesLikeState: likeSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch