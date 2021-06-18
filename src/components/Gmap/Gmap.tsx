import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { geoSitiesSelector } from '../../store/geoSities/geoSitiesSelector'
import { geoSitiesAction } from '../../store/geoSities/geoSitiesAction'
import Geocode from 'react-geocode'
import { geocodingApiKey, gMapApiKey } from '../../constants/constants'
import { Spinner } from '../Spiner/Spiner'
import iconMap from '../../assets/iconMap.svg'
import { TGeoPosition, TGmap } from './GmapTypes'
import { TSelectVal } from '../../pages/OrderPage/OrderPageTypes'

const defaultCenterGoogleMap = {
  lat: 54.31816,
  lng: 48.38379,
}
const containerStyle = {
  width: '100%',
  height: '100%',
}
const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

// TODO: Доделать вывод на карте выбранный адрес

Geocode.setApiKey(geocodingApiKey)
Geocode.setLanguage('ru')

export const Gmap: React.FC<TGmap> = ({
  optionsCities,
  optionsCityPoints,
  selectedOptionCityPoints,
  selectedOptionCity,
}) => {
  const dispatch = useDispatch()

  const [markerData, setMarkerData] = useState<TGeoPosition[] | null>(null)
  const [markerStreetsData, setMarkerStreetsData] = useState<
    TGeoPosition[] | null
  >(null)
  const [pointsList, setPointsList] = useState<string[] | null>(null)
  const [pointsStreets, setPointsStreets] = useState<string[] | null>(null)
  const [centerMap, setCenterMap] = useState<TGeoPosition | null>(null)
  const [zoom, setZoom] = useState(3)

  const { data: geoSities } = useSelector(geoSitiesSelector)

  const getCenterMap = (city: string) => {
    setCenterMap(null)
    Geocode.fromAddress(city).then(
      (response) => {
        const location: TGeoPosition = response.results[0].geometry.location
        setCenterMap(location)
      },
      (error) => {
        console.error(error)
      },
    )
  }

  const getMapPoints = useCallback(
    (arrayAdress: string[]) => {
      setCenterMap(null)
      const arrGeoPoin: TGeoPosition[] = []
      arrayAdress.map((adress) => {
        Geocode.fromAddress(adress)
          .then(
            (response) => {
              const location: TGeoPosition =
                response.results[0].geometry.location
              arrGeoPoin.push(location)
            },
            (error) => {
              console.error(error)
            },
          )
          .then(() => {
            dispatch(geoSitiesAction.list([...arrGeoPoin]))
          })
      })
    },
    [dispatch],
  )
  const getMapPointsStreets = (arrayAdress: string[]) => {
    const arrGeoPoin: TGeoPosition[] = []
    arrayAdress.map((adress) => {
      Geocode.fromAddress(adress)
        .then(
          (response) => {
            const location: TGeoPosition = response.results[0].geometry.location
            arrGeoPoin.push(location)
          },
          (error) => {
            console.error(error)
          },
        )
        .then(() => {
          setMarkerStreetsData([...arrGeoPoin])
        })
    })
  }

  const getСitiesList = useCallback(() => {
    if (optionsCities) {
      let arr = optionsCities.map((city) => city.label)
      setPointsList([...arr])
    }
  }, [optionsCities])

  const getStreetsList = (sity: string, optionsCityPoints: TSelectVal[]) => {
    setPointsStreets(null)
    if (optionsCityPoints && sity) {
      let arr = optionsCityPoints.map((point: TSelectVal) => {
        return 'г.' + sity + ', ' + point.label
      })
      setPointsStreets([...arr])
    }
  }

  const mapZoom = useCallback(() => {
    if (markerData) {
      if (markerData && markerData.length > 0 && !markerStreetsData) {
        setZoom(3)
      } else if (markerData && markerData.length > 0 && markerStreetsData) {
        setZoom(10)
      } else if (centerMap) {
        setZoom(10)
      } else if (markerStreetsData) {
        setZoom(10)
      } else {
        setZoom(10)
      }
    }
  }, [centerMap, markerData, markerStreetsData])

  useEffect(() => {
    getСitiesList()
  }, [getСitiesList])

  useEffect(() => {
    mapZoom()
  }, [mapZoom])

  useEffect(() => {
    if (geoSities.length < 1 && pointsList && selectedOptionCity === null) {
      getMapPoints(pointsList)
    }
    if (geoSities.length > 0) {
      setMarkerData([...geoSities])
    }
  }, [geoSities, getMapPoints, pointsList, selectedOptionCity])

  useEffect(() => {
    if (selectedOptionCity) {
      getCenterMap(selectedOptionCity.label)
    } else {
      setCenterMap(null)
    }
  }, [selectedOptionCity, setCenterMap])

  useEffect(() => {
    if (selectedOptionCity && optionsCityPoints) {
      getStreetsList(selectedOptionCity.label, optionsCityPoints)
    } else {
      setPointsStreets(null)
      setMarkerStreetsData(null)
    }
  }, [optionsCityPoints, selectedOptionCity])

  useEffect(() => {
    if (pointsStreets) {
      console.log('pointsStreets - ', pointsStreets)
      getMapPointsStreets(pointsStreets)
    } else {
      setPointsStreets(null)
      setMarkerStreetsData(null)
    }
  }, [pointsStreets])

  useEffect(() => {
    console.log('centerMap - ', centerMap)
  }, [centerMap])
  useEffect(() => {
    console.log('geoSities - ', geoSities)
  }, [geoSities])
  useEffect(() => {
    console.log('markerData - ', markerData)
  }, [markerData])
  useEffect(() => {
    console.log('markerStreetsData - ', markerStreetsData)
  }, [markerStreetsData])

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: gMapApiKey,
    libraries: ['places'],
  })

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>
  if (!isLoaded) return <Spinner />

  return (
    <div style={{ height: '100%' }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={zoom}
        center={centerMap ? centerMap : defaultCenterGoogleMap}
        options={options}
      >
        {markerData && markerData.length > 0 && !markerStreetsData
          ? markerData.map((marker: any, id: number) => {
              return <Marker key={id} position={marker} icon={iconMap} />
            })
          : null}
        {markerStreetsData && markerStreetsData.length > 0
          ? markerStreetsData.map((marker: any, id: number) => {
              return <Marker key={id} position={marker} icon={iconMap} />
            })
          : null}
      </GoogleMap>
    </div>
  )
}
