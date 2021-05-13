import { useCallback, useState } from 'react'
import {
  Layout,
  Order,
  TabLocation,
  TabСhooseСar,
  TabAdditionally,
  TabTotal,
} from '../../components'
import { TSelectValue } from './OrderPageTypes'
import locIcon from '../../assets/loc-icon.svg'
import arrowTriangle from '../../assets/arrow-triangle.svg'
import styles from './OrderPage.module.scss'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

export const OrderPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<TSelectValue>(null)
  const [isTabLocation, setIsTabLocation] = useState(true)
  const [isTabСhooseСar, setIsTabСhooseСar] = useState(false)
  const [isTabAdditionally, setIsTabAdditionally] = useState(false)
  const [isTabTotal, setIsTabTotal] = useState(false)
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false)

  const handleSelect = useCallback(
    (val: TSelectValue) => {
      setSelectedOption(val)
    },
    [setSelectedOption],
  )

  const activeTabLocation = () => {
    setIsTabСhooseСar(false)
    setIsTabAdditionally(false)
    setIsTabTotal(false)
    setIsTabLocation(true)
  }
  const activeTabСhooseСar = () => {
    setIsTabAdditionally(false)
    setIsTabTotal(false)
    setIsTabLocation(false)
    setIsTabСhooseСar(true)
  }
  const activeTabAdditionally = () => {
    setIsTabTotal(false)
    setIsTabLocation(false)
    setIsTabСhooseСar(false)
    setIsTabAdditionally(true)
  }
  const activeTabTotal = () => {
    setIsTabAdditionally(false)
    setIsTabLocation(false)
    setIsTabСhooseСar(false)
    setIsTabTotal(true)
  }

  const [isMobileOrderOpen, setIsMobileOrderOpen] = useState(true)

  const toggleMobileOrderOpen = () => {
    setIsMobileOrderOpen(!isMobileOrderOpen)
  }

  const handlerTabsOrder = () => {}

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
          <button
            className={isTabLocation ? styles.activeTabBtn : styles.tabBtn}
            onClick={activeTabLocation}
          >
            Местоположение
          </button>
          <img src={arrowTriangle} alt="иконка" />
          <button
            className={isTabСhooseСar ? styles.activeTabBtn : styles.tabBtn}
            onClick={activeTabСhooseСar}
          >
            Модель
          </button>
          <img src={arrowTriangle} alt="иконка" />
          <button
            className={isTabAdditionally ? styles.activeTabBtn : styles.tabBtn}
            onClick={activeTabAdditionally}
          >
            Дополнительно
          </button>
          <img src={arrowTriangle} alt="иконка" />
          <button
            className={isTabTotal ? styles.activeTabBtn : styles.tabBtn}
            onClick={activeTabTotal}
          >
            Итого
          </button>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.orderContainer}>
          <div className={styles.tab}>
            {isTabLocation ? (
              <TabLocation
                selectedOption={selectedOption}
                handleSelect={handleSelect}
                options={options}
              />
            ) : (
              ''
            )}
            {isTabСhooseСar ? <TabСhooseСar /> : ''}
            {isTabAdditionally ? <TabAdditionally /> : ''}
            {isTabTotal ? <TabTotal /> : ''}
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

              {isMobileOrderOpen ? (
                <>
                  <h3>Ваш заказ:</h3>
                  <Order />
                  <p className={styles.price}>Цена: от 8 000 до 12 000 ₽</p>
                </>
              ) : null}

              <button
                className={
                  isMobileOrderOpen ? 'button' : `button ${styles.smallBtn}`
                }
                onClick={handlerTabsOrder}
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
          </div>
        </div>
      </div>
    </Layout>
  )
}
