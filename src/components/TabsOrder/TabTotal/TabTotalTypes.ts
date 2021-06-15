import { TOrder } from '../../../pages/OrderPage/OrderPageTypes'

export type TTabTotal = {
  order: TOrder | null
}

export type TTabTotalView = {
  dateFrom: string | number | Date | null
  name: string
  number: string
  description: string
  tank: number
  path: string
}
