import { memo } from 'react'
import Select from 'react-select'
import { TTabLocation } from './TabLocationTypes'
import map from '../../../assets/map.jpg'
import styles from './TabLocation.module.scss'
import '../SelectCustomStyle.scss'

export const TabLocation: React.FC<TTabLocation> = memo(
  ({
    selectedOptionCityPoints,
    selectedOptionCity,
    handlerCitiesSelect,
    handlerCityOrdersSelect,
    optionsCities,
    optionsCityPoints,
  }) => {
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
