import { createSlice } from '@reduxjs/toolkit'
import { TCities } from './citiesTypes'
import { FetchingStateTypes } from '../types'

const initialState: TCities = {
  fetchingState: FetchingStateTypes.none,
  data: [],
  errorText: '',
}

const citiesSlice = createSlice({
  name: 'CITY',
  initialState,
  reducers: {
    setCities: (state, { payload }) => {
      state.data = payload
      state.fetchingState = FetchingStateTypes.success
    },
    fetchCities: (state) => {
      state.fetchingState = FetchingStateTypes.loading
    },
    fetchErrorCities: (state, { payload }) => {
      state.errorText = payload.errorText
      state.fetchingState = FetchingStateTypes.failed
    },
  },
})

export const { setCities, fetchCities, fetchErrorCities } = citiesSlice.actions

export const citiesReducer = citiesSlice.reducer
