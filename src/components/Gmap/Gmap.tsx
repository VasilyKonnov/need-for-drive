import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { geoSitiesSelector } from '../../store/geoSities/geoSitiesSelector'
import { geoSitiesAction } from '../../store/geoSities/geoSitiesAction'
import Geocode from 'react-geocode'
import { geocodingApiKey, gMapApiKey } from '../../constants/constants'
import { Spinner } from '../Spiner/Spiner'
import iconMap from '../../assets/iconMap.svg'
import { TGeoPosition, TGmap, TAdressVsGeo } from './GmapTypes'
import { TSelectValue } from '../../pages/OrderPage/OrderPageTypes'

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

Geocode.setApiKey(geocodingApiKey)
Geocode.setLanguage('ru')

export const Gmap: React.FC<TGmap> = ({
  optionsCities,
  optionsCityPoints,
  selectedOptionCityPoint,
  selectedOptionCity,
  handlerCitiesSelect,
  handlerStreetsSelect,
}) => {
  const dispatch = useDispatch()

  const [markerCitiesData, setMarkerCitiesData] = useState<
    TAdressVsGeo[] | null
  >(null)
  const [markerStreetsData, setMarkerStreetsData] = useState<
    TAdressVsGeo[] | null
  >(null)
  const [centerMap, setCenterMap] = useState<TGeoPosition | null>(null)
  const [centerMapCity, setCenterMapCity] = useState<TGeoPosition | null>(null)
  const [markerStreet, setMarkerStreet] = useState<TAdressVsGeo | null>(null)
  const [selectedMarker, setSelectedMarker] = useState<TGeoPosition | null>(
    null,
  )
  const [zoom, setZoom] = useState(3)

  const { data: geoSities } = useSelector(geoSitiesSelector)

  const getSityCenterMap = (city: string) => {
    setCenterMap(null)
    Geocode.fromAddress(city).then(
      (response) => {
        const location: TGeoPosition = response.results[0].geometry.location
        setCenterMapCity(location)
      },
      (error) => {
        console.error(error)
      },
    )
  }

  const getMapPointsCities = useCallback(
    (optionsCities: TSelectValue[]) => {
      setCenterMap(null)
      const arrGeoPoin: TAdressVsGeo[] = []
      optionsCities.map((address) => {
        if (address) {
          Geocode.fromAddress(address.label)
            .then(
              (response) => {
                const location: TGeoPosition =
                  response.results[0].geometry.location
                arrGeoPoin.push({ address, location })
              },
              (error) => {
                console.error(error)
              },
            )
            .then(() => {
              dispatch(geoSitiesAction.list([...arrGeoPoin]))
            })
        }
      })
    },
    [dispatch],
  )

  const getMapPointsStreets = useCallback(
    (optionsCityPoints: TSelectValue[]) => {
      const arrGeoPoin: TAdressVsGeo[] = []
      optionsCityPoints.map((address) => {
        if (selectedOptionCity && address) {
          Geocode.fromAddress(
            'г.' + selectedOptionCity.label + ',' + address.label,
          )
            .then(
              (response) => {
                const location: TGeoPosition =
                  response.results[0].geometry.location
                arrGeoPoin.push({ address, location })
              },
              (error) => {
                console.error(error)
              },
            )
            .then(() => {
              setMarkerStreetsData([...arrGeoPoin])
            })
        }
      })
    },
    [selectedOptionCity],
  )

  const getMapPointStreet = useCallback(
    (street: string) => {
      setMarkerStreet(null)
      if (selectedOptionCityPoint && street) {
        const address = 'г.' + selectedOptionCityPoint.label + '. ' + street
        Geocode.fromAddress(address).then(
          (response) => {
            const location: TGeoPosition = response.results[0].geometry.location
            setMarkerStreet({ address: selectedOptionCityPoint, location })
          },
          (error) => {
            console.error(error)
          },
        )
      }
    },
    [selectedOptionCityPoint],
  )

  const mapZoom = useCallback(() => {
    if (markerCitiesData) {
      if (
        markerCitiesData &&
        markerCitiesData.length > 0 &&
        !markerStreetsData
      ) {
        setZoom(3)
      } else if (
        markerCitiesData &&
        markerCitiesData.length > 0 &&
        markerStreetsData
      ) {
        setZoom(10)
      } else if (markerStreetsData && !markerStreet) {
        setZoom(10)
      } else {
        setZoom(10)
      }
    }
  }, [markerCitiesData, markerStreet, markerStreetsData])

  const switchCenterMap = useCallback(() => {
    if (centerMapCity && !markerStreet) {
      setCenterMap(centerMapCity)
    } else {
      if (markerStreet) {
        setCenterMap(markerStreet.location)
      }
    }
  }, [centerMapCity, markerStreet])

  useEffect(() => {
    switchCenterMap()
  }, [switchCenterMap])

  useEffect(() => {
    mapZoom()
  }, [mapZoom])

  useEffect(() => {
    if (geoSities.length < 1 && optionsCities && selectedOptionCity === null) {
      getMapPointsCities(optionsCities)
    }
    if (geoSities.length > 0) {
      setMarkerCitiesData([...geoSities])
    }
  }, [geoSities, getMapPointsCities, optionsCities, selectedOptionCity])

  useEffect(() => {
    if (selectedOptionCity) {
      getSityCenterMap(selectedOptionCity.label)
    } else {
      setCenterMap(null)
    }
  }, [selectedOptionCity, setCenterMap])

  useEffect(() => {
    if (selectedOptionCity && optionsCityPoints) {
      getMapPointsStreets(optionsCityPoints)
    } else {
      setMarkerStreetsData(null)
    }
  }, [getMapPointsStreets, optionsCityPoints, selectedOptionCity])

  useEffect(() => {
    if (selectedOptionCityPoint) {
      getMapPointStreet(selectedOptionCityPoint.label)
    } else {
      setMarkerStreet(null)
    }
  }, [getMapPointStreet, selectedOptionCityPoint])

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
        zoom={markerStreet ? 15 : zoom}
        center={centerMap ? centerMap : defaultCenterGoogleMap}
        options={options}
      >
        {markerCitiesData && markerCitiesData.length > 0 && !markerStreetsData
          ? markerCitiesData.map((marker: TAdressVsGeo, id: number) => {
              return (
                <>
                  <Marker
                    key={id}
                    position={marker.location}
                    icon={iconMap}
                    onClick={() => {
                      setSelectedMarker(marker.location)
                    }}
                  />
                  {selectedMarker === marker.location ? (
                    <InfoWindow
                      key={id}
                      position={selectedMarker}
                      onCloseClick={() => {
                        setSelectedMarker(null)
                      }}
                    >
                      <div>
                        <p style={{ textAlign: 'center' }}>
                          г. {marker.address?.label}
                        </p>
                        <button
                          onClick={() => handlerCitiesSelect(marker.address)}
                        >
                          Выбрать
                        </button>
                      </div>
                    </InfoWindow>
                  ) : null}
                </>
              )
            })
          : null}
        {markerStreetsData && markerStreetsData.length > 0 && markerStreetsData
          ? markerStreetsData.map((marker: any, id: number) => {
              return (
                <>
                  <Marker
                    key={id}
                    position={marker.location}
                    icon={iconMap}
                    onClick={() => {
                      setSelectedMarker(marker.location)
                    }}
                  />
                  {selectedMarker === marker.location ? (
                    <InfoWindow
                      key={id}
                      position={selectedMarker}
                      onCloseClick={() => {
                        setSelectedMarker(null)
                      }}
                    >
                      <div style={{ textAlign: 'center' }}>
                        <p>
                          {'г. ' +
                            selectedOptionCity?.label +
                            ', ' +
                            marker.address.label}
                        </p>
                        <button
                          onClick={() => handlerStreetsSelect(marker.address)}
                        >
                          Выбрать
                        </button>
                      </div>
                    </InfoWindow>
                  ) : null}
                </>
              )
            })
          : null}

        {markerStreet ? (
          <>
            <Marker
              position={markerStreet.location}
              icon={iconMap}
              onClick={() => {
                setSelectedMarker(markerStreet.location)
              }}
            />
            {selectedMarker === markerStreet.location ? (
              <InfoWindow
                position={selectedMarker}
                onCloseClick={() => {
                  setSelectedMarker(null)
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <p>
                    {'г. ' +
                      selectedOptionCity?.label +
                      ', ' +
                      markerStreet.address?.label}
                  </p>
                </div>
              </InfoWindow>
            ) : null}
          </>
        ) : null}
      </GoogleMap>
    </div>
  )
}
