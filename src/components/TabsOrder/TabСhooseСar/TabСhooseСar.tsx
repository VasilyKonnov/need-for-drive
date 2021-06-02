import React, { useCallback, useEffect } from 'react'
import { TabСhooseСarView } from './TabСhooseСarView'
import { TChooseCar } from './TabСhooseСarTypes'

export const TabСhooseСar: React.FC<TChooseCar> = ({
  setFilterStateCarCategory,
  filterStateCarCategory,
  carsCategory,
  carsData,
  setSelectedСar,
  selectedСar,
  setSelectedCarId,
  selectedCarId,
  resetOrderCar,
}) => {
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
    if (selectedCarId) {
      getSelectionCarData()
    }
  }, [selectedCarId, setSelectedCarId])

  return (
    <TabСhooseСarView
      carsCategory={carsCategory}
      filterValue={carsData}
      filterStateCarCategory={filterStateCarCategory}
      handlerFilterCategory={handlerFilterCategory}
      carsData={carsData}
      selectedСar={selectedСar}
      handlerCarCardValue={handlerCarCardValue}
      selectedCarId={selectedCarId}
    />
  )
}
