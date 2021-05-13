import { memo } from 'react'
import { filterVal } from '../../../constants/constants'
import { RadioButton } from './../../RadioButton/RadioButton'
import { TChooseCar } from './TabСhooseСarTypes'
import carImg from '../../../assets/car.jpg'
import styles from './TabСhooseСar.module.scss'

export const TabСhooseСarView: React.FC<TChooseCar> = memo(
  ({ filterValue, handleFilterValue }) => {
    return (
      <>
        <form>
          <RadioButton
            filterVal={filterVal.allModels}
            filterState={filterValue}
            onChange={handleFilterValue}
            labelTitle={'Все модели'}
            htmlForChoice={'Choice1'}
            nameWrap={'chooseCar'}
          />
          <RadioButton
            filterVal={filterVal.economy}
            filterState={filterValue}
            onChange={handleFilterValue}
            labelTitle={'Эконом'}
            htmlForChoice={'Choice2'}
            nameWrap={'chooseCar'}
          />
          <RadioButton
            filterVal={filterVal.premium}
            filterState={filterValue}
            onChange={handleFilterValue}
            labelTitle={'Премиум'}
            htmlForChoice={'Choice3'}
            nameWrap={'chooseCar'}
          />
        </form>
        <div className={styles.carList}>
          <div className={styles.carListItem}>
            <h3>SONATA</h3>
            <p>10 000 - 32 000 ₽</p>
            <img src={carImg} alt="Картинка машины" />
          </div>
          <div className={styles.carListItem}>
            <h3>SONATA</h3>
            <p>10 000 - 32 000 ₽</p>
            <img src={carImg} alt="Картинка машины" />
          </div>
          <div className={styles.carListItem}>
            <h3>SONATA</h3>
            <p>10 000 - 32 000 ₽</p>
            <img src={carImg} alt="Картинка машины" />
          </div>
          <div className={styles.carListItem}>
            <h3>SONATA</h3>
            <p>10 000 - 32 000 ₽</p>
            <img src={carImg} alt="Картинка машины" />
          </div>
          <div className={styles.carListItem}>
            <h3>SONATA</h3>
            <p>10 000 - 32 000 ₽</p>
            <img src={carImg} alt="Картинка машины" />
          </div>
        </div>
      </>
    )
  },
)
