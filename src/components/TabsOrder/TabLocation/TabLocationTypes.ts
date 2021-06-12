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
  setOptionsCities: (val: TSelectVal[]) => void
  setOptionsCitiesPoints: (val: TSelectVal[]) => void
  city: TSelectValue
}
