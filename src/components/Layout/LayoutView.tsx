import menuBtn from '../../assets/menu_btn.svg'
import { TLayout } from './LayoutTypes'
import closeIcon from '../../assets/x.svg'
import mobiMenuBtn from '../../assets/mobile-menu_btn.svg'
import { LayoutMenu } from '../LayoutMenu'
import { memo } from 'react'
import styles from './Layout.module.scss'
console.log('styles ', styles)
export const LayoutView: React.FC<TLayout> = memo(
  ({ children, toggleMenu, isMenuOpen }) => {
    return (
      <>
        {isMenuOpen ? (
          <div className={styles.menu}>
            <div className={styles.closeWrap}>
              <button className={styles.menuButton} onClick={toggleMenu}>
                <img src={closeIcon} alt="Кнопка закрыть меню" />
              </button>
            </div>
            <div className={styles.menuContainer}>
              <div className={styles.menuCol}>
                <LayoutMenu />
                <button className={styles.langBtn + ' ' + styles.mobileLangBtn}>
                  Eng
                </button>
              </div>
              <div className={styles.menuColTransparent}></div>
            </div>
          </div>
        ) : (
          ''
        )}

        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <button className={styles.menuBtn} onClick={toggleMenu}>
              <img src={menuBtn} alt="menu-button" />
            </button>
            <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
              <img src={mobiMenuBtn} alt="mobile menu button" />
            </button>
            <button className={styles.langBtn}>Eng</button>
          </div>
          <div className={styles.container}>{children}</div>
        </div>
      </>
    )
  },
)
