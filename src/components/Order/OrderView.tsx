import React, { memo } from 'react'
import { TOrder } from './OrderTypes'
import styles from './Order.module.scss'

export const OrderView: React.FC<TOrder> = memo(
  ({ cityPoints, city, carModel }) => {
    return (
      <>
        <div className={styles.filedTabWrap}>
          {cityPoints && city ? (
            <div className={styles.filedTab}>
              <p className={styles.tabName}>Пункт выдачи</p>
              <p className={styles.tabValue}>
                {city.label}, {cityPoints.label}
              </p>
            </div>
          ) : null}

          {carModel ? (
            <div className={styles.filedTab}>
              <p className={styles.tabName}>Модель</p>
              <p className={styles.tabValue}>{carModel}</p>
            </div>
          ) : null}

          {/* 
        <div className={styles.filedTab}>
          <p className={styles.tabName}>Цвет</p>
          <p className={styles.tabValue}>Голубой</p>
        </div>
        <div className={styles.filedTab}>
          <p className={styles.tabName}>Длительность аренды</p>
          <p className={styles.tabValue}>1д 2ч</p>
        </div>
        <div className={styles.filedTab}>
          <p className={styles.tabName}>Тариф</p>
          <p className={styles.tabValue}>На сутки</p>
        </div>
        <div className={styles.filedTab}>
          <p className={styles.tabName}>Полный бак</p>
          <p className={styles.tabValue}>Да</p>
        </div> */}
        </div>
      </>
    )
  },
)
