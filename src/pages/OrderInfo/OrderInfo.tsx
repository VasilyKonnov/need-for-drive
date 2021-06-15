import { useCallback, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { OrderInfoView } from './OrderInfoView'
import { orderAction, TOrderStore } from '../../store/order'
import { orderSelector } from '../../store/order/orderSelector'
import orderApi from '../../utils/api/order'
import { Spinner } from '../../components/Spiner/Spiner'

export const OrderInfo = () => {
  const history = useHistory()
  const orderId: { id: string } = useParams()
  const dispatch = useDispatch()

  const [isMobileOrderOpen, setIsMobileOrderOpen] = useState(true)
  const [orderLoc, setOrderLoc] = useState<TOrderStore | null>(null)
  const [getOrderError, setGetOrderError] = useState<string | null>(null)

  const { data: orderStore } = useSelector(orderSelector)

  const toggleMobileOrderOpen = () => {
    setIsMobileOrderOpen(!isMobileOrderOpen)
  }

  const getOrder = useCallback(async () => {
    try {
      const response = await orderApi.getOrder(orderId.id)
      setOrderLoc(response)
      setGetOrderError(null)
    } catch (err) {
      setGetOrderError(
        'Проверьте номер заказа, нам не удалось найти заказ с номером ',
      )
    }
  }, [orderId.id])

  const removeOrderRequest = () => {
    dispatch(orderAction.remove())
    history.push('/order-page')
  }

  useEffect(() => {
    if (orderStore !== null && orderId.id === orderStore.id) {
      setGetOrderError(null)
      setOrderLoc(orderStore)
    } else if (orderLoc === null) {
      getOrder()
    }
  }, [getOrder, orderId, orderLoc, orderStore, setOrderLoc])

  if (orderLoc && orderId) {
    const { dateFrom } = orderLoc
    const { name, number, tank, description } = orderLoc.carId
    const path = orderLoc.carId.thumbnail.path

    return (
      <OrderInfoView
        order={orderLoc}
        path={path}
        name={name}
        number={number}
        tank={tank}
        description={description}
        dateFrom={dateFrom}
        isMobileOrderOpen={isMobileOrderOpen}
        toggleMobileOrderOpen={toggleMobileOrderOpen}
        orderId={orderId.id}
        getOrderError={getOrderError}
        removeOrderRequest={removeOrderRequest}
      />
    )
  } else {
    return <Spinner />
  }
}
