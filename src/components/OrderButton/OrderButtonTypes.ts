import { TOrder, TSelectValue } from '../../pages/OrderPage/OrderPageTypes'
import { TCar } from '../../store/cars'

export type TOrderButton = {
  activeTab: number
  isMobileOrderOpen: boolean
  handlerClickOrderButton: any
  cityPoints: TSelectValue
  city: TSelectValue
  selectedСar: TCar | null
  order: TOrder | null
  handlerModalConfirm: () => void
}
