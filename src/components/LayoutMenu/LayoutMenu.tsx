import { Link } from 'react-router-dom'
import styles from './LayoutMenu.module.scss'

export const LayoutMenu = () => {
  return (
    <div className={styles.menu}>
      <Link to="#">Парковка</Link>
      <Link to="#">Страховка</Link>
      <Link to="#">Бензин</Link>
      <Link to="#">Обслуживание</Link>
      <div className={styles.social}>
        <Link to="#" className={styles.telegram}></Link>
        <Link to="#" className={styles.fb}></Link>
        <Link to="#" className={styles.inst}></Link>
      </div>
    </div>
  )
}
