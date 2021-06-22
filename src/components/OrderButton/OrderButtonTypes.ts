import { TOrder, TSelectValue } from '../../pages/OrderPage/OrderPageTypes'
import { TCar } from '../../store/cars'

export type TOrderButton = {
  activeTab: number
  isMobileOrderOpen: boolean
  handlerClickOrderButton: any
  isChooseModelBtnDisabled: boolean
  selectedСar: TCar | null
  isAdditionallylBtnDisabled: boolean
  handlerModalConfirm: () => void
}
