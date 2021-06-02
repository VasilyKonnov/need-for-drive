import { TCity } from '../../store/cities'

export type TOrderPage = {}

export type TSelectVal = {
  value: string
  label: string
}

export type TSelectValue = TSelectVal | null

export type TTabOrder = {
  id: number
  label: string
  disabled: boolean
}

export type TOptionsList = TSelectVal[] | []

export type TOrder = {
  orderStatusId: { name: string }
  cityId: any
  pointId: any
  carId: any
  color: string
  dateFrom: any
  dateTo: any
  rateId: any
  price: number
  isFullTank: boolean
  isNeedChildChair: boolean
  isRightWheel: boolean
}
