import {
  TSelectValue,
  TSelectVal,
} from '../../../pages/OrderPage/OrderPageTypes'

export type TTabLocation = {
  selectedOption: TSelectValue
  handleSelect: (val: TSelectValue) => void
  options: TSelectVal[]
}
