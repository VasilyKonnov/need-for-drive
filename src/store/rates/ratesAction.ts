import orderApi from '../../utils/api/order'
import { setRates, fetchRates } from './ratesSlice'
import { TRatesAction } from './ratesTypes'

export const ratesAction: TRatesAction = {
  list: () => (dispatch) => {
    dispatch(fetchRates())
    orderApi.getRates().then((data) => {
      dispatch(setRates(data))
    })
  },
}
