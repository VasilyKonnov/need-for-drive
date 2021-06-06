import orderApi from '../../utils/api/order'
import { fetchOrder, setOrderStatusTypes } from './orderStatusTypesSlice'
import { TOrderStatusTypesAction } from './orderStatusTypesTypes'

export const orderStatusTypesAction: TOrderStatusTypesAction = {
  list: () => (dispatch) => {
    dispatch(fetchOrder())
    orderApi.getOrderStatusId().then((data) => {
      dispatch(setOrderStatusTypes(data))
    })
  },
}
