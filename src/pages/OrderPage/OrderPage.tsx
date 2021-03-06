import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { TCar } from '../../store/cars'

import { orderStatusTypesSelector } from '../../store/orderStatusTypes/orderStatusTypesSelector'

import { TRate } from '../../store/rates'

import { orderAction } from '../../store/order'
import { orderSelector } from '../../store/order/orderSelector'

import { tabsOrder, tabsOrderCarsActive } from '../../constants/constants'
import { TOptionsList, TOrder, TSelectValue, TTabOrder } from './OrderPageTypes'
import {
  Layout,
  Order,
  TabLocation,
  TabСhooseСar,
  TabAdditionally,
  TabTotal,
  ScrollToTop,
  TotalSum,
  OrderButton,
  OrderModal,
} from '../../components'
import { TCarId } from '../../components/TabsOrder/TabСhooseСar/TabСhooseСarTypes'
import locIcon from '../../assets/loc-icon.svg'
import styles from './OrderPage.module.scss'

export const OrderPage: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [optionsCities, setOptionsCities] = useState<TOptionsList>([])
  const [isMobileOrderOpen, setIsMobileOrderOpen] = useState(true)
  const [optionsCitiesPoints, setOptionsCitiesPoints] = useState<TOptionsList>(
    [],
  )
  const [activeTab, setActiveTab] = useState(1)
  const [tabsOrderLoc, setTabsOrderLoc] = useState(tabsOrder)
  const [city, setCity] = useState<TSelectValue>(null)
  const [cityPoints, setCityPoints] = useState<TSelectValue>(null)

  const [selectedСar, setSelectedСar] = useState<TCar | null>(null)
  const [selectedCarId, setSelectedCarId] = useState<TCarId>('')

  const [selectedCarColor, setSelectedCarColor] = useState<string>('colorAny')
  const [carColors, setCarColors] = useState<string[] | null>(null)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const [selectedRate, setSelectedRate] = useState<TRate | null>(null)
  const [rateId, setRateId] = useState('')

  const [isFullTank, setIsFullTank] = useState(false)
  const [isNeedChildChair, setIsNeedChildChair] = useState(false)
  const [isRightWheel, setIsRightWheel] = useState(false)
  const [totalSumOrder, setTotalSumOrder] = useState(0)
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false)
  const [order, setOrder] = useState<TOrder | null>(null)

  const resetOrderCar = useCallback(() => {
    setSelectedСar(null)
    setSelectedRate(null)
    setSelectedCarColor('')
    setSelectedCarId('')
    setRateId('')
    setTotalSumOrder(0)
    setOrder(null)
    setTabsOrderLoc(tabsOrderCarsActive)
  }, [])

  const resetOrder = useCallback(() => {
    resetOrderCar()
    setStartDate(null)
    setEndDate(null)
    setIsFullTank(false)
    setIsNeedChildChair(false)
    setIsRightWheel(false)
    setTabsOrderLoc(tabsOrder)
  }, [resetOrderCar])

  const { data: orderStatusTypes } = useSelector(orderStatusTypesSelector)

  const { data: orderStore } = useSelector(orderSelector)

  const openTab = (event: any) => {
    setActiveTab(+event.target.dataset.id)
  }
  const toggleMobileOrderOpen = () => {
    setIsMobileOrderOpen(!isMobileOrderOpen)
  }

  const handlerCitiesSelect = useCallback(
    (val: TSelectValue) => {
      setCity(val)
      setCityPoints(null)
      setOptionsCitiesPoints([])
      resetOrder()
    },
    [setCity, resetOrder],
  )

  const handlerStreetsSelect = useCallback(
    (val: TSelectValue) => {
      setCityPoints(null)
      setCityPoints(val)
      resetOrder()
    },
    [setCityPoints, resetOrder],
  )

  const handlerTabsOrder = () => {
    let array = tabsOrderLoc.map((tab) => {
      return { ...tab }
    })
    for (var i in array) {
      if (array[i].disabled === true) {
        array[i].disabled = false
        break
      }
    }
    setTabsOrderLoc(array)
  }

  const handlerClickOrderButton = (tab: number) => {
    handlerTabsOrder()
    setActiveTab(tab)
  }

  const handlerModalConfirm = useCallback(() => {
    setIsModalConfirmOpen(!isModalConfirmOpen)
  }, [isModalConfirmOpen])

  const sendOrder = () => {
    if (order) {
      dispatch(orderAction.list(order))
    }
  }
  useEffect(() => {
    if (orderStore) {
      history.push('/order-id/' + orderStore.id)
    }
  }, [history, orderStore])

  useEffect(() => {
    if (selectedСar) {
      setCarColors(selectedСar.colors)
    }
  }, [selectedСar, setSelectedСar])

  useEffect(() => {
    if (
      orderStatusTypes &&
      city &&
      cityPoints &&
      selectedСar &&
      startDate &&
      endDate &&
      rateId &&
      totalSumOrder
    ) {
      setOrder({
        orderStatusId: orderStatusTypes.id,
        cityId: city.value,
        pointId: cityPoints.value,
        carId: selectedСar,
        color: selectedCarColor ? selectedCarColor : 'any',
        dateFrom: startDate,
        dateTo: endDate,
        rateId: rateId,
        price: totalSumOrder,
        isFullTank: isFullTank,
        isNeedChildChair: isNeedChildChair,
        isRightWheel: isRightWheel,
      })
    } else {
      setOrder(null)
    }
  }, [
    selectedCarColor,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    selectedRate,
    city,
    rateId,
    totalSumOrder,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
    cityPoints,
    selectedСar,
    orderStatusTypes,
  ])

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
          {tabsOrderLoc.map((tabOrder: TTabOrder, id: number) => {
            return (
              <button
                key={id}
                className={
                  tabOrder.id === activeTab
                    ? styles.activeTabBtn
                    : styles.tabBtn
                }
                onClick={openTab}
                data-id={tabOrder.id}
                disabled={tabOrder.disabled}
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
                selectedOptionCityPoints={cityPoints}
                selectedOptionCity={city}
                handlerCitiesSelect={handlerCitiesSelect}
                handlerStreetsSelect={handlerStreetsSelect}
                optionsCities={optionsCities}
                optionsCityPoints={optionsCitiesPoints}
                setOptionsCities={setOptionsCities}
                setOptionsCitiesPoints={setOptionsCitiesPoints}
                city={city}
              />
            ) : null}
            {activeTab === 2 ? (
              <TabСhooseСar
                setSelectedСar={setSelectedСar}
                selectedСar={selectedСar}
                setSelectedCarId={setSelectedCarId}
                selectedCarId={selectedCarId}
                resetOrderCar={resetOrderCar}
              />
            ) : null}

            {activeTab === 3 ? (
              <TabAdditionally
                carColors={carColors}
                setSelectedCarColor={setSelectedCarColor}
                selectedCarColor={selectedCarColor}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                selectedRate={selectedRate}
                setSelectedRate={setSelectedRate}
                rateId={rateId}
                setRateId={setRateId}
                isFullTank={isFullTank}
                setIsFullTank={setIsFullTank}
                setIsNeedChildChair={setIsNeedChildChair}
                isNeedChildChair={isNeedChildChair}
                setIsRightWheel={setIsRightWheel}
                isRightWheel={isRightWheel}
              />
            ) : null}

            {activeTab === 4 ? <TabTotal order={order} /> : null}
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
                  <Order
                    cityPoints={cityPoints}
                    city={city}
                    carModel={selectedСar ? selectedСar.name : null}
                    selectedCarColor={selectedCarColor}
                    startDate={startDate}
                    endDate={endDate}
                    selectedRate={selectedRate}
                    isFullTank={isFullTank}
                    isNeedChildChair={isNeedChildChair}
                    isRightWheel={isRightWheel}
                  />
                </>
              ) : null}

              <TotalSum
                selectedСar={selectedСar}
                selectedRate={selectedRate}
                startDate={startDate}
                endDate={endDate}
                setTotalSumOrder={setTotalSumOrder}
                isFullTank={isFullTank}
                isNeedChildChair={isNeedChildChair}
                isRightWheel={isRightWheel}
              />

              <OrderButton
                activeTab={activeTab}
                isMobileOrderOpen={isMobileOrderOpen}
                handlerClickOrderButton={handlerClickOrderButton}
                isChooseModelBtnDisabled={cityPoints && city ? false : true}
                selectedСar={selectedСar}
                isAdditionallylBtnDisabled={order ? false : true}
                handlerModalConfirm={handlerModalConfirm}
              />

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
      <ScrollToTop />
      {isModalConfirmOpen ? (
        <OrderModal
          sendOrder={sendOrder}
          handlerModalConfirm={handlerModalConfirm}
        />
      ) : null}
    </Layout>
  )
}
