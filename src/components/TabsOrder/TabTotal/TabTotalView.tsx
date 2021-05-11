import styles from './TabTotal.module.scss'
import imgCar from '../../../assets/car.jpg'

export const TabTotalView: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.carInfo}>
        <h3 className={styles.carName}>Hyndai, i30 N</h3>
        <span className={styles.carRegNumber}>K 761 HA 73</span>
        <p className={styles.details}>
          <b>Топливо</b> 100%
        </p>
        <p className={styles.details}>
          <b>Доступна с </b>12.06.2019 12:00
        </p>
      </div>
      <div className={styles.carImg}>
        <img src={imgCar} alt="картинка машины" />
      </div>
    </div>
  )
}
