import { TGeoPosition } from '../../components/Gmap/GmapTypes'
import { setGeoSities } from './geoSitiesSlice'
import { TGeoSitiesAction } from './geoSitiesTypes'

export const geoSitiesAction: TGeoSitiesAction = {
  list: (data: TGeoPosition[]) => (dispatch) => {
    dispatch(setGeoSities(data))
  },
}
