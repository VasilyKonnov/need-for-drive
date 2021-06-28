import { TAdressVsGeo } from '../../components/Gmap/GmapTypes'
import { setGeoSities } from './geoSitiesSlice'
import { TGeoSitiesAction } from './geoSitiesTypes'

export const geoSitiesAction: TGeoSitiesAction = {
  list: (data: TAdressVsGeo[]) => (dispatch) => {
    dispatch(setGeoSities(data))
  },
}
