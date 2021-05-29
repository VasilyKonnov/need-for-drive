import orderApi from '../../utils/api/order'
import { setCars, fetchCars } from './carsSlice'
import { TCarsAction } from './carsTypes'

export const carsAction: TCarsAction = {
  list: () => (dispatch) => {
    dispatch(fetchCars())
    orderApi.getCars().then((data) => {
      dispatch(setCars(data))
    })
  },
}
