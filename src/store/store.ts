import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { carsReducer } from './cars'
import { citiesReducer } from './cities'
import { cityPointsReducer } from './cityPoints'
import { ratesReducer } from './rates'
import { orderStatusTypesReducer } from './orderStatusTypes'
import { orderReducer } from './order'
import { geoSitiesReducer } from './geoSities'

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    cities: citiesReducer,
    cityPoints: cityPointsReducer,
    rates: ratesReducer,
    orderStatusTypes: orderStatusTypesReducer,
    order: orderReducer,
    geoSities: geoSitiesReducer,
  },
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
