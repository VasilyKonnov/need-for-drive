import { TOrder } from '../../pages/OrderPage/OrderPageTypes'
import orderApi from '../../utils/api/order'
import { setOrder, fetchOrder, removeOrder } from './orderSlice'
import { TOrderAction } from './orderTypes'

export const orderAction: TOrderAction = {
  list: (order: TOrder) => (
    dispatch: (arg0: { payload: any; type: string }) => void,
  ) => {
    dispatch(fetchOrder())
    orderApi.postOrder(order).then((data) => {
      dispatch(setOrder(data))
    })
  },
  remove: () => (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(removeOrder())
  },
}
