import { useCallback, useEffect, useState } from 'react'
import { TOrder } from './OrderTypes'
import { OrderView } from './OrderView'

export const Order: React.FC<TOrder> = ({ cityPoints, city, carModel }) => {
  return <OrderView cityPoints={cityPoints} city={city} carModel={carModel} />
}
