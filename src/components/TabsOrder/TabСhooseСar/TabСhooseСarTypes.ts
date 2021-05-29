import { TCar } from '../../../store/cars/carsTypes'

export type TCarsData = TCar[] | null
export type TCategory = { id: string; name: string }
export type TCarsCategory = TCategory[] | null
export type TCarId = string | number | readonly string[] | undefined

export type TChooseCar = {
  setSelectedСar: (car: TCar) => void
  selectedСar: TCar | null
  setFilterStateCarCategory: (value: string) => void
  filterStateCarCategory: string
  carsCategory: TCarsCategory
  carsData: TCarsData
  selectedCarId: TCarId
  setSelectedCarId: (value: TCarId) => void
}

export type TChooseCarView = {
  selectedCarId: TCarId
  selectedСar: TCar | null
  filterStateCarCategory: string
  carsCategory: TCarsCategory
  filterValue: TCarsData | null
  handlerFilterCategory: (e: { target: { value: string } }) => void
  carsData: TCarsData | null
  handlerCarCardValue: (e: { target: { value: string } }) => void
}
