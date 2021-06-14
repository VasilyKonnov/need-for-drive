import styles from './TabTotal.module.scss'
import { TTabTotalView } from './TabTotalTypes'
import { checkCarImg } from '../../../utils/common'

export const TabTotalView: React.FC<TTabTotalView> = ({
  dateFrom,
  name,
  number,
  description,
  tank,
  path,
}) => {
  return (
    <div className={styles.wrap}>
      <>
        <div className={styles.carInfo}>
          <h3 className={styles.carName}>{name}</h3>

          {number ? (
            <span className={styles.carRegNumber}>{number}</span>
          ) : null}

          {tank ? (
            <p className={styles.details}>
              <b>Топливо</b> {tank + '%'}
            </p>
          ) : null}

          <p className={styles.details}>
            <b>Доступна с </b>
            {new Date(dateFrom).toLocaleString('ru')}
          </p>

          {description ? (
            <p className={styles.details}>
              <b>Описание </b>
              {description}
            </p>
          ) : null}
        </div>

        <div className={styles.carImg}>
          <img src={checkCarImg(path)} alt="картинка машины" />
        </div>
      </>
    </div>
  )
}
