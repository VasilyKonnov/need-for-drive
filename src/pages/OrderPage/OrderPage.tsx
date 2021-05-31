import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchingStateTypes } from '../../store'

import { citiesAction } from '../../store/cities/citiesAction'
import { citiesSelector } from '../../store/cities/citiesSelector'

import { cityPointsAction } from '../../store/cityPoints/cityPointsAction'
import { cityPointsSelector } from '../../store/cityPoints/cityPointsSelector'

import { carsAction, TCar } from '../../store/cars'
import { carsSelector } from '../../store/cars/carsSelector'

import { ratesAction, TRate } from '../../store/rates'
import { ratesSelector } from '../../store/rates/ratesSelector'

import { nameBtnOrder, tabsOrder } from '../../constants/constants'
import { selectOptionsCities, selectPointsOptions } from '../../utils/common'
import { TOptionsList, TSelectValue, TTabOrder } from './OrderPageTypes'
import {
  Layout,
  Order,
  TabLocation,
  TabСhooseСar,
  TabAdditionally,
  TabTotal,
  ScrollToTop,
} from '../../components'
import locIcon from '../../assets/loc-icon.svg'
import styles from './OrderPage.module.scss'
import {
  TCarId,
  TCarsCategory,
  TCarsData,
} from '../../components/TabsOrder/TabСhooseСar/TabСhooseСarTypes'

export const OrderPage: React.FC = () => {
  const dispatch = useDispatch()
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false)
  const [isMobileOrderOpen, setIsMobileOrderOpen] = useState(true)
  const [optionsCities, setOptionsCities] = useState<TOptionsList>([])
  const [optionsCitiesPoints, setOptionsCitiesPoints] = useState<TOptionsList>(
    [],
  )
  const [activeTab, setActiveTab] = useState(1)
  const [tabsOrderLoc, setLabsOrderLoc] = useState(tabsOrder)
  const [tabDisabledIndex, setTtabDisabledIndex] = useState(1)
  const [city, setCity] = useState<TSelectValue>(null)
  const [cityPoints, setCityPoints] = useState<TSelectValue>(null)

  const [carsData, setCarsData] = useState<TCarsData | null>(null)
  const [
    carsDataVsCategory,
    setCarsDataVsCategory,
  ] = useState<TCarsData | null>(null)
  const [carsCategory, setCarsCategory] = useState<TCarsCategory>(null)
  const [filterStateCarCategory, setFilterStateCarCategory] = useState('all')
  const [carsFilterData, setCarsFilterData] = useState<TCarsData | null>(null)
  const [selectedСar, setSelectedСar] = useState<TCar | null>(null)
  const [selectedCarId, setSelectedCarId] = useState<TCarId>('')

  const [selectedCarColor, setSelectedCarColor] = useState<string>('colorAny')
  const [carColors, setCarColors] = useState<string[] | null>(null)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const [selectedRate, setSelectedRate] = useState<TRate | null>(null)
  const [rateId, setRateId] = useState('')

  const { data: cities, fetchingState: fetchingStateCities } = useSelector(
    citiesSelector,
  )
  const {
    data: citiesPoints,
    fetchingState: fetchingStateCityPoints,
  } = useSelector(cityPointsSelector)
  const { data: cars, fetchingState: fetchingStateCars } = useSelector(
    carsSelector,
  )
  const { data: rates, fetchingState: fetchingStateRates } = useSelector(
    ratesSelector,
  )

  const openTab = (event: any) => {
    setActiveTab(+event.target.dataset.id)
  }
  const toggleMobileOrderOpen = () => {
    setIsMobileOrderOpen(!isMobileOrderOpen)
  }

  const getCarCategory = () => {
    let category
    category = cars.filter((car) => car.categoryId !== null)
    setCarsDataVsCategory(category)
    category = category.map((car: TCar) => {
      return { id: car.categoryId.id, name: car.categoryId.name }
    })

    category = category.filter((item, index, self) => {
      return (
        index ===
        self.findIndex((i) => i.id === item.id && i.name === item.name)
      )
    })
    setCarsCategory(category)
  }

  const handlerCitiesSelect = useCallback(
    (val: TSelectValue) => {
      setCity(val)
      setCityPoints(null)
      setOptionsCitiesPoints([])
    },
    [setCity],
  )
  const handlerCityOrdersSelect = useCallback(
    (val: TSelectValue) => {
      setCityPoints(val)
    },
    [setCityPoints],
  )

  const handlerTabsOrder = () => {
    let array = tabsOrderLoc.map((tab) => {
      return Object.assign({}, tab)
    })

    for (var i in array) {
      if (array[i].disabled === true) {
        array[i].disabled = false
        setTtabDisabledIndex(Number(i) + 1)
        break
      }
    }
    setLabsOrderLoc(array)
  }
  const handlerClickOrderButton = (event: any, val: number) => {
    if (tabDisabledIndex > val) {
      openTab(event)
    } else {
      handlerTabsOrder()
      openTab(event)
    }
  }

  const filterCarCategory = () => {
    if (filterStateCarCategory === 'all') {
      setCarsFilterData(carsData)
    }
    if (carsDataVsCategory !== null && filterStateCarCategory !== 'all') {
      const result = carsDataVsCategory.filter((items) => {
        return items.categoryId.id === filterStateCarCategory
      })
      setCarsFilterData(result)
    }
  }

  useEffect(() => {
    if (fetchingStateCities === FetchingStateTypes.none) {
      dispatch(citiesAction.list())
    }
    if (cities.length > 1) {
      setOptionsCities(selectOptionsCities(cities))
    }
  }, [cities, dispatch, fetchingStateCities])

  useEffect(() => {
    if (fetchingStateCityPoints === FetchingStateTypes.none) {
      dispatch(cityPointsAction.list())
    }

    if (citiesPoints.length > 1 && city) {
      let filterVal = citiesPoints.filter((cityPoints) => {
        return cityPoints.cityId !== null
          ? cityPoints.cityId.id === city.value
          : ''
      })
      setOptionsCitiesPoints(selectPointsOptions(filterVal))
    }
  }, [city, citiesPoints, dispatch, fetchingStateCityPoints])

  useEffect(() => {
    if (fetchingStateCars === FetchingStateTypes.none) {
      dispatch(carsAction.list())
    }
    if (cars.length > 1) {
      setCarsData(cars)
    }
    if (carsData !== null && carsFilterData === null) {
      setCarsFilterData(carsData)
    }
  }, [cars, carsData, carsFilterData, dispatch, fetchingStateCars, setCarsData])

  useEffect(() => {
    if (cars.length > 0 && carsCategory === null) {
      getCarCategory()
    }
  }, [cars, carsCategory])

  useEffect(() => {
    filterCarCategory()
  }, [filterStateCarCategory, setFilterStateCarCategory, carsData, setCarsData])

  useEffect(() => {
    if (selectedСar) {
      setCarColors(selectedСar.colors)
    }
  }, [selectedСar, setSelectedСar])

  useEffect(() => {
    if (fetchingStateRates === FetchingStateTypes.none) {
      dispatch(ratesAction.list())
    }
  }, [dispatch, fetchingStateRates, rates])

  useEffect(() => {
    if (rates && rateId.length > 0) {
      const select = rates.filter((rate) => {
        return rate.id === rateId
      })
      setSelectedRate(select[0])
    }
  }, [rateId, rates])

  useEffect(() => {
    if (selectedCarColor) {
      console.log(selectedCarColor)
    }
    if (startDate) {
      console.log(startDate)
    }
    if (endDate) {
      console.log(endDate)
    }
    if (selectedRate) {
      console.log(selectedRate)
    }
  }, [
    selectedCarColor,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    selectedRate,
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
          {tabsOrderLoc.map((tabOrder: TTabOrder) => {
            return (
              <button
                key={tabOrder.id}
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
                handlerCityOrdersSelect={handlerCityOrdersSelect}
                optionsCities={optionsCities}
                optionsCityPoints={optionsCitiesPoints}
              />
            ) : null}
            {activeTab === 2 ? (
              <TabСhooseСar
                setFilterStateCarCategory={setFilterStateCarCategory}
                filterStateCarCategory={filterStateCarCategory}
                carsCategory={carsCategory}
                carsData={carsFilterData}
                setSelectedСar={setSelectedСar}
                selectedСar={selectedСar}
                setSelectedCarId={setSelectedCarId}
                selectedCarId={selectedCarId}
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
                rates={rates}
                setRateId={setRateId}
              />
            ) : null}
            {activeTab === 4 ? <TabTotal /> : null}
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
                  />
                </>
              ) : null}

              {selectedСar ? (
                <p className={styles.price}>
                  Цена: от {selectedСar.priceMin} до {selectedСar.priceMax} ₽
                </p>
              ) : null}

              {activeTab === 1 ? (
                <button
                  className={
                    isMobileOrderOpen ? 'button' : `button ${styles.smallBtn}`
                  }
                  onClick={(e) => handlerClickOrderButton(e, 1)}
                  disabled={cityPoints && city ? false : true}
                  data-id={2}
                >
                  {nameBtnOrder.chooseModel}
                </button>
              ) : null}

              {activeTab === 2 ? (
                <button
                  className={
                    isMobileOrderOpen ? 'button' : `button ${styles.smallBtn}`
                  }
                  onClick={(e) => handlerClickOrderButton(e, 2)}
                  disabled={selectedСar ? false : true}
                  data-id={3}
                >
                  {nameBtnOrder.additionally}
                </button>
              ) : null}

              {activeTab === 3 ? (
                <button
                  className={
                    isMobileOrderOpen ? 'button' : `button ${styles.smallBtn}`
                  }
                  onClick={(e) => handlerClickOrderButton(e, 3)}
                  disabled={true}
                  data-id={4}
                >
                  {nameBtnOrder.total}
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
      <ScrollToTop />
    </Layout>
  )
}
