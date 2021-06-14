import { createSlice } from '@reduxjs/toolkit'
import { TOrderStoreData } from './orderTypes'
import { FetchingStateTypes } from '../types'

const initialState: TOrderStoreData = {
  fetchingState: FetchingStateTypes.none,
  data: null,
  errorText: '',
}

const orderSlice = createSlice({
  name: 'ORDER',
  initialState,
  reducers: {
    setOrder: (state, { payload }) => {
      state.data = payload
      state.fetchingState = FetchingStateTypes.success
    },
    removeOrder: (state) => {
      state.data = null
    },
    fetchOrder: (state) => {
      state.fetchingState = FetchingStateTypes.loading
    },
    fetchErrorOrder: (state, { payload }) => {
      state.errorText = payload.errorText
      state.fetchingState = FetchingStateTypes.failed
    },
  },
})

export const {
  removeOrder,
  setOrder,
  fetchOrder,
  fetchErrorOrder,
} = orderSlice.actions

export const orderReducer = orderSlice.reducer
