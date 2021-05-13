import { Layout, Carousel } from '../../components'
import { Link } from 'react-router-dom'
import { sliderData } from '../../constants/constants'
import locIcon from '../../assets/loc-icon.svg'
import styles from './MainPage.module.scss'

export const MainPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.bookNow}>
          <div className={styles.header}>
            <p className={styles.title}>Need for drive</p>
            <p className={styles.location}>
              <img src={locIcon} alt="Иконка локации" />
              <span>Ульяновск</span>
            </p>
          </div>
          <div className={styles.body}>
            <div>
              <h1>
                Каршеринг
                <span>Need for drive</span>
              </h1>
              <p>Поминутная аренда авто твоего города</p>
              <Link to="/order-page">
                <button className="button">Забронировать</button>
              </Link>
            </div>
          </div>
          <div className={styles.footer}>
            <p>© 2016-2019 «Need for drive»</p>
            <a href="tel:84952342244" className={styles.phone}>
              8 (495) 234-22-44
            </a>
          </div>
        </div>
        <div className={styles.slider}>
          <Carousel sliderData={sliderData} />
        </div>
      </div>
    </Layout>
  )
}
