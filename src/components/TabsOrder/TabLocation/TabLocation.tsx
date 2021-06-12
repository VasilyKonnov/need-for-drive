import { memo, useEffect } from 'react'
import Select from 'react-select'
import { citiesAction } from '../../../store/cities/citiesAction'
import { citiesSelector } from '../../../store/cities/citiesSelector'
import { TTabLocation } from './TabLocationTypes'
import map from '../../../assets/map.jpg'
import styles from './TabLocation.module.scss'
import '../SelectCustomStyle.scss'
import { FetchingStateTypes } from '../../../store/types'
import { useDispatch, useSelector } from 'react-redux'
import { cityPointsSelector } from '../../../store/cityPoints/cityPointsSelector'
import { selectOptionsCities, selectPointsOptions } from '../../../utils/common'
import { cityPointsAction } from '../../../store/cityPoints/cityPointsAction'

export const TabLocation: React.FC<TTabLocation> = memo(
  ({
    selectedOptionCityPoints,
    selectedOptionCity,
    handlerCitiesSelect,
    handlerCityOrdersSelect,
    optionsCities,
    optionsCityPoints,
    setOptionsCities,
    setOptionsCitiesPoints,
    city,
  }) => {
    const dispatch = useDispatch()

    const { data: cities, fetchingState: fetchingStateCities } = useSelector(
      citiesSelector,
    )
    const {
      data: citiesPoints,
      fetchingState: fetchingStateCityPoints,
    } = useSelector(cityPointsSelector)

    useEffect(() => {
      if (fetchingStateCities === FetchingStateTypes.none) {
        dispatch(citiesAction.list())
      }
      if (cities.length > 1) {
        setOptionsCities(selectOptionsCities(cities))
      }
    }, [cities, dispatch, fetchingStateCities])

    useEffect(() => {
      if (fetchingStateCityPoints === FetchingStateTypes.none) {
        dispatch(cityPointsAction.list())
      }

      if (citiesPoints.length > 1 && city) {
        let filterVal = citiesPoints.filter((cityPoints) => {
          return cityPoints.cityId !== null
            ? cityPoints.cityId.id === city.value
            : ''
        })
        setOptionsCitiesPoints(selectPointsOptions(filterVal))
      }
    }, [city, citiesPoints, dispatch, fetchingStateCityPoints])

    return (
      <>
        <div className={styles.selectWrap}>
          <p>Город</p>
          <Select
            isClearable
            className="react-select-container"
            classNamePrefix="react-select"
            value={selectedOptionCity}
            onChange={handlerCitiesSelect}
            placeholder="Выберите город"
            options={optionsCities}
          />
        </div>
        <div className={styles.selectWrap}>
          <p>Пункт выдачи</p>
          <Select
            isClearable
            className="react-select-container"
            classNamePrefix="react-select"
            value={selectedOptionCityPoints}
            onChange={handlerCityOrdersSelect}
            placeholder="Начните вводить пункт..."
            options={optionsCityPoints}
          />
        </div>

        <div className={styles.mapWrap}>
          <p>Выбрать на карте:</p>
          <img src={map} alt="map" />
        </div>
      </>
    )
  },
)
