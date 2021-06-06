import { createSlice } from '@reduxjs/toolkit'
import { TOrderStoreData } from './orderStatusTypesTypes'
import { FetchingStateTypes } from '../types'

const initialState: TOrderStoreData = {
  fetchingState: FetchingStateTypes.none,
  data: null,
  errorText: '',
}

const orderStatusTypesSlice = createSlice({
  name: 'ORDER_STATUS_TYPES',
  initialState,
  reducers: {
    setOrderStatusTypes: (state, { payload }) => {
      state.data = payload
      state.fetchingState = FetchingStateTypes.success
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
  fetchOrder,
  setOrderStatusTypes,
  fetchErrorOrder,
} = orderStatusTypesSlice.actions
export const orderStatusTypesReducer = orderStatusTypesSlice.reducer
