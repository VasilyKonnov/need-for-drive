import styles from './TabTotal.module.scss'
import { TTabTotal } from './TabTotalTypes'
import { checkCarImg } from '../../../utils/common'
import { dateOptions } from '../../../constants/constants'

export const TabTotalView: React.FC<TTabTotal> = ({ order }) => {
  return (
    <div className={styles.wrap}>
      {order ? (
        <>
          <div className={styles.carInfo}>
            <h3 className={styles.carName}>{order.carId.name}</h3>
            <span className={styles.carRegNumber}>{order.carId.number}</span>

            <p className={styles.details}>
              <b>Топливо</b> {order.carId.tank + '%'}
            </p>

            <p className={styles.details}>
              <b>Доступна с </b>
              {order.dateFrom.toLocaleString('ru', dateOptions)}
            </p>

            <p className={styles.details}>
              <b>Описание </b>
              {order.carId.description}
            </p>
          </div>

          <div className={styles.carImg}>
            <img
              src={checkCarImg(order.carId.thumbnail.path)}
              alt="картинка машины"
            />
          </div>
        </>
      ) : null}
    </div>
  )
}
