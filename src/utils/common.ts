import { TCityPoint } from '../store/cityPoints'
import { TCity } from '../store/cities'
import { urlApi } from '../constants/constants'
import { TOrderStatus } from '../store/orderStatusTypes'

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

export function dayHourMinute(t: number) {
  var cd = 24 * 60 * 60 * 1000,
    ch = 60 * 60 * 1000,
    d = Math.floor(t / cd),
    h = Math.floor((t - d * cd) / ch),
    m = Math.round((t - d * cd - h * ch) / 60000),
    pad = function (n: any) {
      return n < 10 ? '0' + n : n
    }
  if (m === 60) {
    h++
    m = 0
  }
  if (h === 24) {
    d++
    h = 0
  }

  return `${d}д ${pad(h)}ч ${pad(m)}м`
}

export function getMinuteInDateDef(t: number) {
  return Math.round(t / 60000)
}

export const rounded = function (price: number) {
  return +price.toFixed(2)
}
