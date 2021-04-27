import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: {},
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
