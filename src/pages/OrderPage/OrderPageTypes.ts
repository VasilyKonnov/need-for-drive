import { TCar } from '../../store/cars/carsTypes'
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
  orderStatusId: string
  cityId: string
  pointId: string
  carId: TCar
  color: string
  dateFrom: number | null
  dateTo: number | null
  rateId: string
  price: number
  isFullTank: boolean
  isNeedChildChair: boolean
  isRightWheel: boolean
}
