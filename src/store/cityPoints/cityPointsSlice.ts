import { createSlice } from '@reduxjs/toolkit'
import { TCityPoints } from './cityPointsTypes'
import { FetchingStateTypes } from '../types'

const initialState: TCityPoints = {
  fetchingState: FetchingStateTypes.none,
  data: [],
  errorText: '',
}

const cityPointsSlice = createSlice({
  name: 'CITY_POINTS',
  initialState,
  reducers: {
    setCityPoints: (state, { payload }) => {
      state.data = payload
      state.fetchingState = FetchingStateTypes.success
    },
    fetchCityPoints: (state) => {
      state.fetchingState = FetchingStateTypes.loading
    },
    fetchErrorCityPoints: (state, { payload }) => {
      state.errorText = payload.errorText
      state.fetchingState = FetchingStateTypes.failed
    },
  },
})

export const {
  setCityPoints,
  fetchCityPoints,
  fetchErrorCityPoints,
} = cityPointsSlice.actions
export const cityPointsReducer = cityPointsSlice.reducer
