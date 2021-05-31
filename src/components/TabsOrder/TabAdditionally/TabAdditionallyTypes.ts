import { SetStateAction } from 'react'
import { TRate } from '../../../store/rates'

export type TTabAdditionally = {
  carColors: string[] | null
  setSelectedCarColor: (value: string) => void
  selectedCarColor: string
  startDate: Date | null | undefined
  setStartDate: (date: any) => void
  endDate: Date | null | undefined
  setEndDate: (date: any) => void
  selectedRate: TRate | null
  rates: TRate[]
  setRateId: (value: string) => void
}

export type TTabAdditionallyView = {
  isFullTank: boolean
  isBabySeat: boolean
  isRightHand: boolean
  startDate: Date | null | undefined
  endDate: Date | null | undefined
  handleFullTank: () => void
  handleBabySeat: () => void
  handleRightHand: () => void
  setStartDate: React.Dispatch<SetStateAction<null>>
  setEndDate: React.Dispatch<SetStateAction<null>>
  selectedCarColor: string
  carColors: string[] | null
  handlerColorRadioButton: (e: { target: { value: string } }) => void
  handlerCarTarif: (e: { target: { value: string } }) => void
  rates: TRate[]
  selectedRate: TRate | null
}
