import React, { SetStateAction } from 'react'
import { TSelectValue } from '../../pages/OrderPage/OrderPageTypes'

export type TOrder = {
  city: TSelectValue
  cityPoints: TSelectValue
  carModel: string | null
}
