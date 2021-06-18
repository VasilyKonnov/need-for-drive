import { Dispatch } from 'redux'
import { TGeoPosition } from '../../components/Gmap/GmapTypes'

export type TGeoSitiesAction = {
  list: (data: TGeoPosition[]) => (dispatch: Dispatch) => void
}

export type TGeoSities = {
  data: TGeoPosition[]
}
