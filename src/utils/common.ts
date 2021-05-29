import { TCityPoint } from '../store/cityPoints'
import { TCity } from '../store/cities'
import { urlApi } from '../constants/constants'

export const selectOptionsCities = (cities: TCity[]) => {
  let options = cities.map((option: TCity) => {
    return { value: option.id, label: option.name }
  })
  return options
}

export const selectPointsOptions = (points: TCityPoint[]) => {
  let options = points.map((option: TCityPoint) => {
    return { value: option.id, label: option.address }
  })
  return options
}

export const checkCarImg = (imgUrl: string) => {
  if (imgUrl.substr(0, 1) === '/') {
    return urlApi + imgUrl
  } else {
    return imgUrl
  }
}
