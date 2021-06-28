import { TSelectVal, TSelectValue } from '../../pages/OrderPage/OrderPageTypes'

export type TGmap = {
  optionsCities: TSelectVal[]
  optionsCityPoints: TSelectVal[]
  selectedOptionCityPoint: TSelectValue
  selectedOptionCity: TSelectValue
  handlerCitiesSelect: (val: TSelectValue) => void
  handlerStreetsSelect: (val: TSelectValue) => void
}

export type TGeoPosition = {
  lat: number
  lng: number
}

export type TAdressVsGeo = {
  address: TSelectValue
  location: TGeoPosition
}
