import { createSlice } from '@reduxjs/toolkit'
import { TGeoSities } from './geoSitiesTypes'

const initialState: TGeoSities = {
  data: [],
}

const geoSitiesSlice = createSlice({
  name: 'GEOSITIES',
  initialState,
  reducers: {
    setGeoSities: (state, { payload }) => {
      state.data = payload
    },
  },
})

export const { setGeoSities } = geoSitiesSlice.actions
export const geoSitiesReducer = geoSitiesSlice.reducer
