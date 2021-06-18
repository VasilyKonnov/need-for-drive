import { TSelectVal, TSelectValue } from '../../pages/OrderPage/OrderPageTypes'

export type TGmap = {
  optionsCities: TSelectVal[]
  optionsCityPoints: TSelectVal[]
  selectedOptionCityPoints: TSelectValue
  selectedOptionCity: TSelectValue
}

export type TGeoPosition = {
  lat: number
  lng: number
}
