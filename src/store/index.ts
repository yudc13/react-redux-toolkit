import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import todosReducer from './todosSlice'

const store = configureStore({
  reducer: {
    todo: todosReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
