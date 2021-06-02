import { TCar } from '../../store/cars'
import { TRate } from '../../store/rates'

export type TTotalSum = {
  selectedСar: TCar | null
  selectedRate: TRate | null
  startDate: any
  endDate: any
  setTotalSumOrder: (val: number) => void
  isFullTank: boolean
  isNeedChildChair: boolean
  isRightWheel: boolean
}
