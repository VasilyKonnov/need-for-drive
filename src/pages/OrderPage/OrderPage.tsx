import { useCallback, useState } from 'react'
import {
  Layout,
  Order,
  TabLocation,
  TabСhooseСar,
  TabAdditionally,
  TabTotal,
  ScrollToTop,
} from '../../components'
import { tabsOrder } from '../../constants/constants'
import { TSelectValue, TTabOrder } from './OrderPageTypes'
import locIcon from '../../assets/loc-icon.svg'
import styles from './OrderPage.module.scss'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

export const OrderPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<TSelectValue>(null)
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false)

  const [activeTab, setActiveTab] = useState(1)
  const openTab = (event: any) => {
    setActiveTab(+event.target.dataset.id)
  }

  const handleSelect = useCallback(
    (val: TSelectValue) => {
      setSelectedOption(val)
    },
    [setSelectedOption],
  )

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
          {tabsOrder.map((tabOrder: TTabOrder) => {
            return (
              <button
                className={
                  tabOrder.id === activeTab
                    ? styles.activeTabBtn
                    : styles.tabBtn
                }
                onClick={openTab}
                data-id={tabOrder.id}
              >
                {tabOrder.label}
              </button>
            )
          })}
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.orderContainer}>
          <div className={styles.tab}>
            {activeTab === 1 ? (
              <TabLocation
                selectedOption={selectedOption}
                handleSelect={handleSelect}
                options={options}
              />
            ) : (
              ''
            )}
            {activeTab === 2 ? <TabСhooseСar /> : ''}
            {activeTab === 3 ? <TabAdditionally /> : ''}
            {activeTab === 4 ? <TabTotal /> : ''}
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
      <ScrollToTop />
    </Layout>
  )
}
