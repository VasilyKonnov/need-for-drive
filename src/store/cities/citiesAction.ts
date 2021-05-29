import orderApi from '../../utils/api/order'
import { setCities, fetchCities } from './citiesSlice'
import { TCitiesAction } from './citiesTypes'

export const citiesAction: TCitiesAction = {
  list: () => (dispatch) => {
    dispatch(fetchCities())
    orderApi.getCities().then((data) => {
      dispatch(setCities(data))
    })
  },
}
