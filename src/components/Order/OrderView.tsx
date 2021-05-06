import React from 'react'
import { TOrderView } from './OrderTypes'
import styles from './Order.module.scss'

export const OrderView: React.FC<TOrderView> = React.memo(
  ({ toggleMobileOrderOpen, isMobileOrderOpen, handleNextTab }) => {
    return (
      <div className={styles.orderWrap}>
        {isMobileOrderOpen ? (
          <button className={styles.close} onClick={toggleMobileOrderOpen}>
            &#10006;
          </button>
        ) : null}

        {isMobileOrderOpen ? (
          <>
            <h3>Ваш заказ:</h3>
            <div className={styles.filedTabWrap}>
              <div className={styles.filedTab}>
                <p className={styles.tabName}>Пункт выдачи</p>
                <p className={styles.tabValue}>Ульяновск, Нариманова 42</p>
              </div>
              <div className={styles.filedTab}>
                <p className={styles.tabName}>Модель</p>
                <p className={styles.tabValue}>Hyndai, i30 N</p>
              </div>
            </div>
            <p className={styles.price}>Цена: от 8 000 до 12 000 ₽</p>
          </>
        ) : null}

        <button
          className={isMobileOrderOpen ? '' : styles.smallBtn}
          onClick={handleNextTab}
        >
          Выбрать модель
        </button>
        {isMobileOrderOpen ? (
          ''
        ) : (
          <button
            className={styles.openOrderBtn}
            onClick={toggleMobileOrderOpen}
          >
            Ваш заказ &#9660;
          </button>
        )}
      </div>
    )
  },
)
