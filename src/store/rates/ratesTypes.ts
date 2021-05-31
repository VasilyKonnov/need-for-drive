import { Dispatch } from 'redux'

export type TRatesAction = {
  list: () => (dispatch: Dispatch) => void
}

export type TRate = {
  createdAt: number
  id: string
  price: number
  rateTypeId: {
    unit: string
    name: string
    id: string
  }
  updatedAt: number
}

export type TRates = {
  fetchingState: string
  data: TRate[]
  errorText: string
}
