import { useCallback, useState } from 'react'
import { TOrder } from './OrderTypes'
import { OrderView } from './OrderView'

export const Order: React.FC<TOrder> = ({}) => {
  return <OrderView />
}
