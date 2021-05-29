import orderApi from '../../utils/api/order'
import { setCityPoints, fetchCityPoints } from './cityPointsSlice'
import { TCityPointsAction } from './cityPointsTypes'

export const cityPointsAction: TCityPointsAction = {
  list: () => (dispatch) => {
    dispatch(fetchCityPoints())
    orderApi.getCityPoints().then((data) => {
      dispatch(setCityPoints(data))
    })
  },
}
