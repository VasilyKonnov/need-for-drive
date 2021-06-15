import React from 'react'
import locIcon from '../../assets/loc-icon.svg'
import { Layout, Order } from '../../components'
import { nameBtnOrder } from '../../constants/constants'
import { TOrderInfo } from './OrderInfoTypes'
import styles from '../OrderPage/OrderPage.module.scss'
import stylesOrder from '../../components/TabsOrder/TabTotal/TabTotal.module.scss'
import { checkCarImg } from '../../utils/common'
import { Spinner } from '../../components/Spiner/Spiner'

export const OrderInfoView: React.FC<TOrderInfo> = ({
  isMobileOrderOpen,
  toggleMobileOrderOpen,
  order,
  orderId,
  getOrderError,
  removeOrderRequest,
  path,
  name,
  number,
  tank,
  description,
  dateFrom,
}) => {
  return (
    <Layout>
      <div className={styles.header}>
        <div className={styles.container}>
          <p className={styles.title}>Need for drive</p>
          <p className={styles.location}>
            <img src={locIcon} alt="Иконка локации" />
            Ульяновск
          </p>
        </div>
      </div>
      <div className={styles.wrapTabs}>
        <div className={styles.container}>
          <p className={styles.orderNumber}>
            Заказ номер {orderId ? orderId : ''}
          </p>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.orderContainer}>
          <div className={styles.tab}>
            {getOrderError && order === null ? (
              <p>
                {getOrderError} <b>{orderId}</b>
              </p>
            ) : null}

            {order && getOrderError === null ? (
              <div className={stylesOrder.wrap}>
                <div className={stylesOrder.carInfo}>
                  <p className={stylesOrder.orderTitle}>
                    Ваш заказ подтверждён
                  </p>
                  <h3 className={stylesOrder.carName}>{name}</h3>
                  {number ? (
                    <span className={stylesOrder.carRegNumber}>{number}</span>
                  ) : null}
                  {tank ? (
                    <p className={stylesOrder.details}>
                      <b>Топливо</b> {tank + '%'}
                    </p>
                  ) : null}

                  <p className={stylesOrder.details}>
                    <b>Доступна с </b>
                    {new Date(dateFrom).toLocaleString('ru')}
                  </p>
                  {description ? (
                    <p className={stylesOrder.details}>
                      <b>Описание </b>
                      {description}
                    </p>
                  ) : null}
                </div>

                <div className={stylesOrder.carImg}>
                  <img src={checkCarImg(path)} alt="картинка машины" />
                </div>
              </div>
            ) : null}
            {order === null && getOrderError === null ? <Spinner /> : null}
          </div>

          <div className={styles.order}>
            <div className={styles.orderWrap}>
              {isMobileOrderOpen ? (
                <button
                  className={styles.close}
                  onClick={toggleMobileOrderOpen}
                >
                  &#10006;
                </button>
              ) : null}
              {isMobileOrderOpen && order ? (
                <>
                  <h3>Ваш заказ:</h3>
                  <Order
                    cityPoints={{
                      value: order.pointId.id,
                      label: order.pointId.address,
                    }}
                    city={{ value: order.cityId.id, label: order.cityId.name }}
                    carModel={order.carId.name}
                    selectedCarColor={order.color}
                    startDate={order.dateFrom}
                    endDate={order.dateTo}
                    selectedRate={order.rateId}
                    isFullTank={order.isFullTank}
                    isNeedChildChair={order.isNeedChildChair}
                    isRightWheel={order.isRightWheel}
                  />
                  <p className={styles.price}>Цена: {order.price} ₽</p>
                </>
              ) : null}
              {order ? (
                <button
                  className={`button--crimson ${styles.confirmBtn}`}
                  onClick={removeOrderRequest}
                >
                  {nameBtnOrder.cancel}
                </button>
              ) : null}

              {isMobileOrderOpen ? null : (
                <button
                  className={styles.openOrderBtn}
                  onClick={toggleMobileOrderOpen}
                >
                  Ваш заказ &#9660;
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
