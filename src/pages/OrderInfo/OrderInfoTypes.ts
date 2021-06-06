import { TOrderStore } from '../../store/order'

export type TOrderInfo = {
  isMobileOrderOpen: boolean
  toggleMobileOrderOpen: () => void
  order: TOrderStore | null
  orderId: string
  getOrderError: string | null
  removeOrderRequest: () => void
}
