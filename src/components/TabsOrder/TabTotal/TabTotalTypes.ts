import { TOrder } from '../../../pages/OrderPage/OrderPageTypes'

export type TTabTotal = {
  order: TOrder | null
}

export type TTabTotalView = {
  dateFrom: number
  name: string
  number: string
  description: string
  tank: string
  path: string
}
