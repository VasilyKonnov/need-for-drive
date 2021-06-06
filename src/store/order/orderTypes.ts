import { Dispatch } from 'redux'
import { TOrder } from '../../pages/OrderPage/OrderPageTypes'
import { TCar } from '../cars'
import { TRate } from '../rates'

export type TOrderAction = {
  list: (order: TOrder) => (dispatch: Dispatch) => void
  remove: () => void
}

export type TOrderStore = {
  carId: TCar
  cityId: { name: string; id: string }
  color: string
  createdAt: number
  dateFrom: number
  dateTo: number
  id: string
  isFullTank: boolean
  isNeedChildChair: boolean
  isRightWheel: boolean
  orderStatusId: { name: string; id: string }
  pointId: { address: string; name: string; id: string }
  price: number
  rateId: TRate
  updatedAt: number
}

export type TOrderStoreData = {
  fetchingState: string
  data: TOrderStore | null
  errorText: string
}
