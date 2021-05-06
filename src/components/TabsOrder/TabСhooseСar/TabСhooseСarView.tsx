import { useState } from 'react'
import { filterVal } from '../../../constants/constants'
import carImg from '../../../assets/car.jpg'
import styles from './TabСhooseСar.module.scss'

export const TabСhooseСarView: React.FC = () => {
  const [filterValue, setFilterValue] = useState(filterVal.allModels)
  const handleFilterValue = (e: { target: { value: string } }) => {
    const { value } = e.target
    setFilterValue(value)
  }

  return (
    <>
      <form>
        <label
          htmlFor="Choice1"
          className={
            filterValue === filterVal.allModels
              ? styles.radioButtonActive
              : styles.radioButton
          }
        >
          <span className={styles.simulator}></span>
          <input
            defaultChecked
            type="radio"
            id="Choice1"
            name="chooseCar"
            value={filterVal.allModels}
            onChange={handleFilterValue}
          />
          Все модели
        </label>

        <label
          htmlFor="Choice2"
          className={
            filterValue === filterVal.economy
              ? styles.radioButtonActive
              : styles.radioButton
          }
        >
          <span className={styles.simulator}></span>
          <input
            type="radio"
            id="Choice2"
            name="chooseCar"
            value={filterVal.economy}
            onChange={handleFilterValue}
          />
          Эконом
        </label>

        <label
          htmlFor="Choice3"
          className={
            filterValue === filterVal.premium
              ? styles.radioButtonActive
              : styles.radioButton
          }
        >
          <span className={styles.simulator}></span>
          <input
            type="radio"
            id="Choice3"
            name="chooseCar"
            value={filterVal.premium}
            onChange={handleFilterValue}
          />
          <span>Премиум</span>
        </label>
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
}
