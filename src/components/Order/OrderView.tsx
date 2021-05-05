import React from 'react'
import { TOrder } from './OrderTypes'
import styles from './Order.module.scss'

export const OrderView: React.FC<TOrder> = React.memo(
  ({ toggleMobileOrderOpen, isMobileOrderOpen }) => {
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
                <p className={styles.tabName}>Пункт</p>
                <p className={styles.tabValue}>Ульяновск</p>
              </div>
              <div className={styles.filedTab}>
                <p className={styles.tabName}>Пунктвыдач</p>
                <p className={styles.tabValue}>Ульяновск, Нариманова 42</p>
              </div>
              <div className={styles.filedTab}>
                <p className={styles.tabName}>Пвыдач</p>
                <p className={styles.tabValue}>Нарим</p>
              </div>
            </div>
            <p className={styles.price}>Цена: от 8 000 до 12 000 ₽</p>
          </>
        ) : null}

        <button className={isMobileOrderOpen ? '' : styles.smallBtn}>
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
