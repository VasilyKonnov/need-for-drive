import { Dispatch } from 'redux'
import { TAdressVsGeo } from '../../components/Gmap/GmapTypes'

export type TGeoSitiesAction = {
  list: (data: TAdressVsGeo[]) => (dispatch: Dispatch) => void
}

export type TGeoSities = {
  data: TAdressVsGeo[]
}
