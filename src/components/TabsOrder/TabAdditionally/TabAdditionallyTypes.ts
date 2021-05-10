import { SetStateAction } from 'react'

export type TabAdditionallyimport = {
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
  carColor: string
  handleColorRadioButton: (e: { target: { value: string } }) => void
  carTarif: string
  handleCarTarif: (e: { target: { value: string } }) => void
}
