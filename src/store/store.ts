import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { carsReducer } from './cars'
import { citiesReducer } from './cities'
import { cityPointsReducer } from './cityPoints'

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    cities: citiesReducer,
    cityPoints: cityPointsReducer,
  },
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
