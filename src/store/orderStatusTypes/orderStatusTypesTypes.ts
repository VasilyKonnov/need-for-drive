import { Dispatch } from 'redux'

export type TOrderStatusTypesAction = {
  list: () => (dispatch: Dispatch) => void
}

export type TOrderStatus = {
  id: string
  name: string
}

export type TOrderStoreData = {
  fetchingState: string
  data: TOrderStatus | null
  errorText: string
}
