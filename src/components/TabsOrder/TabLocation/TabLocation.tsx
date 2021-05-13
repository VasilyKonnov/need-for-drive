import { memo } from 'react'
import Select from 'react-select'
import { TTabLocation } from './TabLocationTypes'
import map from '../../../assets/map.jpg'
import styles from './TabLocation.module.scss'
import '../SelectCustomStyle.scss'

export const TabLocation: React.FC<TTabLocation> = memo(
  ({ selectedOption, handleSelect, options }) => {
    return (
      <>
        <div className={styles.selectWrap}>
          <p>Город</p>
          <Select
            isClearable
            className="react-select-container"
            classNamePrefix="react-select"
            defaultValue={selectedOption}
            onChange={handleSelect}
            placeholder="Выберите город"
            options={options}
          />
        </div>
        <div className={styles.selectWrap}>
          <p>Пункт выдачи</p>
          <Select
            isClearable
            className="react-select-container"
            classNamePrefix="react-select"
            defaultValue={selectedOption}
            onChange={handleSelect}
            placeholder="Начните вводить пункт..."
            options={options}
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
