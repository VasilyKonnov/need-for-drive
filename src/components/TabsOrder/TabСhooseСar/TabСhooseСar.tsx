import React, { useCallback, useEffect, useState } from 'react'
import { TabСhooseСarView } from './TabСhooseСarView'
import { TCarsCategory, TCarsData, TChooseCar } from './TabСhooseСarTypes'
import { FetchingStateTypes } from '../../../store'
import { carsAction } from '../../../store/cars/carsAction'
import { useDispatch, useSelector } from 'react-redux'
import { carsSelector } from '../../../store/cars/carsSelector'
import { TCar } from '../../../store/cars'
import { Spinner } from '../../Spiner/Spiner'

export const TabСhooseСar: React.FC<TChooseCar> = ({
  setSelectedСar,
  selectedСar,
  setSelectedCarId,
  selectedCarId,
  resetOrderCar,
}) => {
  const [carsData, setCarsData] = useState<TCarsData | null>(null)
  const [carsFilterData, setCarsFilterData] = useState<TCarsData | null>(null)
  const [carsCategory, setCarsCategory] = useState<TCarsCategory>(null)
  const [filterStateCarCategory, setFilterStateCarCategory] = useState('all')

  const [
    carsDataVsCategory,
    setCarsDataVsCategory,
  ] = useState<TCarsData | null>(null)

  const dispatch = useDispatch()

  const { data: cars, fetchingState: fetchingStateCars } = useSelector(
    carsSelector,
  )

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

  const handlerFilterCategory = useCallback(
    (e: { target: { value: string } }) => {
      const { value } = e.target
      setFilterStateCarCategory(value)
    },
    [setFilterStateCarCategory],
  )

  const handlerCarCardValue = useCallback(
    (e: { target: { value: string } }) => {
      const { value } = e.target
      resetOrderCar()
      setSelectedCarId(value)
    },
    [resetOrderCar, setSelectedCarId],
  )

  const getSelectionCarData = () => {
    if (carsData && selectedCarId) {
      const car = carsData?.filter((item) => {
        return item.id === selectedCarId
      })
      setSelectedСar(car[0])
    }
  }

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
    if (selectedCarId) {
      getSelectionCarData()
    }
  }, [selectedCarId, setSelectedCarId])

  if (carsData) {
    return (
      <TabСhooseСarView
        carsCategory={carsCategory}
        filterValue={carsFilterData}
        filterStateCarCategory={filterStateCarCategory}
        handlerFilterCategory={handlerFilterCategory}
        carsData={carsFilterData}
        selectedСar={selectedСar}
        handlerCarCardValue={handlerCarCardValue}
        selectedCarId={selectedCarId}
      />
    )
  } else {
    return <Spinner />
  }
}
