import { Dispatch } from 'redux'

export type TCitiesAction = {
  list: () => (dispatch: Dispatch) => void
}

export type TCity = {
  createdAt: number
  id: string
  name: string
  updatedAt: number
}

export type TCities = {
  fetchingState: string
  data: TCity[]
  errorText: string
}
