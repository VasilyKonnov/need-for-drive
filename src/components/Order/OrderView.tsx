import React, { memo } from 'react'
import { TOrder } from './OrderTypes'
import styles from './Order.module.scss'
import { dayHourMinute } from '../../utils/common'
import { dateOptions } from '../../constants/constants'

export const OrderView: React.FC<TOrder> = memo(
  ({
    cityPoints,
    city,
    carModel,
    selectedCarColor,
    startDate,
    endDate,
    selectedRate,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
  }) => {
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

          {selectedCarColor && selectedCarColor !== 'colorAny' ? (
            <div className={styles.filedTab}>
              <p className={styles.tabName}>Цвет</p>
              <p className={styles.tabValue}>{selectedCarColor}</p>
            </div>
          ) : null}

          {startDate && endDate === null ? (
            <div className={styles.filedTab}>
              <p className={styles.tabName}>Аренда</p>
              <p className={styles.tabValue}>
                c {startDate.toLocaleString('ru', dateOptions)}
              </p>
            </div>
          ) : null}

          {startDate && endDate ? (
            <div className={styles.filedTab}>
              <p className={styles.tabName}>Длительность аренды</p>
              <p className={styles.tabValue}>
                {dayHourMinute(endDate - startDate)}
              </p>
            </div>
          ) : null}

          {selectedRate ? (
            <div className={styles.filedTab}>
              <p className={styles.tabName}>Тариф</p>
              <p className={styles.tabValue}>{selectedRate.rateTypeId.name}</p>
            </div>
          ) : null}

          {isFullTank ? (
            <div className={styles.filedTab}>
              <p className={styles.tabName}>Полный бак</p>
              <p className={styles.tabValue}>Да</p>
            </div>
          ) : null}

          {isNeedChildChair ? (
            <div className={styles.filedTab}>
              <p className={styles.tabName}>Детское кресло</p>
              <p className={styles.tabValue}>Да</p>
            </div>
          ) : null}

          {isRightWheel ? (
            <div className={styles.filedTab}>
              <p className={styles.tabName}>Правый руль</p>
              <p className={styles.tabValue}>Да</p>
            </div>
          ) : null}
        </div>
      </>
    )
  },
)
