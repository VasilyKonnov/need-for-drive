import { TSelectValue } from '../../pages/OrderPage/OrderPageTypes'
import { TRate } from '../../store/rates'

export type TOrder = {
  city: TSelectValue
  cityPoints: TSelectValue
  carModel: string | null
  selectedCarColor: string | null
  startDate: any
  endDate: any
  selectedRate: TRate | null
  isFullTank: boolean
  isNeedChildChair: boolean
  isRightWheel: boolean
}
