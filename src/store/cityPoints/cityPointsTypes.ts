import { Dispatch } from 'redux'

export type TCityPointsAction = {
  list: () => (dispatch: Dispatch) => void
}

export type TCityPoint = {
  address: string
  cityId: { name: string; id: string }
  id: string
  name: string
}

export type TCityPoints = {
  fetchingState: string
  data: TCityPoint[]
  errorText: string
}
