import { TOrder } from '../../pages/OrderPage/OrderPageTypes'
import { fetchAxios } from '../../services/axios'

const getCities = async () => {
  const response = await fetchAxios.get('db/city')
  return response.data.data
}

const getCityPoints = async () => {
  const response = await fetchAxios.get('db/point')
  return response.data.data
}

const getTable = async () => {
  const response = await fetchAxios.get('db/TableData_car')
  return response.data.data
}

const getCars = async () => {
  const response = await fetchAxios.get('db/car')
  return response.data.data
}

const getRates = async () => {
  const response = await fetchAxios.get('db/rate')
  return response.data.data
}

const getRateType = async () => {
  const response = await fetchAxios.get('db/rateType')
  return response.data.data
}

const getOrderStatusId = async () => {
  const response = await fetchAxios.get('/db/orderStatus')
  return response.data.data[0]
}

const postOrder = async (order: TOrder) => {
  const response = await fetchAxios.post('/db/order', order)
  return response.data.data
}

const getOrder = async (orderId: any) => {
  const response = await fetchAxios.get(`/db/order/${orderId}`)
  return response.data.data
}

const removeOrder = async (orderId: any) => {
  const response = await fetchAxios.delete(`/db/order/${orderId}`)
  return response
}

const orderApi = {
  getCityPoints,
  getRateType,
  getTable,
  getCities,
  getCars,
  getRates,
  getOrderStatusId,
  postOrder,
  getOrder,
  removeOrder,
}

export default orderApi
