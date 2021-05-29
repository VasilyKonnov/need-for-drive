import {
  TSelectValue,
  TSelectVal,
} from '../../../pages/OrderPage/OrderPageTypes'

export type TTabLocation = {
  selectedOptionCityPoints: TSelectValue
  selectedOptionCity: TSelectValue
  handlerCitiesSelect: (val: TSelectValue) => void
  handlerCityOrdersSelect: (val: TSelectValue) => void
  optionsCities: TSelectVal[]
  optionsCityPoints: TSelectVal[]
}
