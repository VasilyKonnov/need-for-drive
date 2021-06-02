import styles from './TotalSum.module.scss'
import { TTotalSum } from './TotalSumTypes'
import { rateType } from '../../constants/constants'
import { getMinuteInDateDef, rounded } from '../../utils/common'

export const TotalSum: React.FC<TTotalSum> = ({
  selectedСar,
  selectedRate,
  startDate,
  endDate,
  setTotalSumOrder,
  isFullTank,
  isNeedChildChair,
  isRightWheel,
}) => {
  const addServicesSum = (sum: any) => {
    let totalSum = sum
    if (isFullTank) {
      totalSum = totalSum + 500
    }
    if (isNeedChildChair) {
      totalSum = totalSum + 500
    }
    if (isRightWheel) {
      totalSum = totalSum + 500
    }
    setTotalSumOrder(totalSum)
    return totalSum
  }

  const minutePrise = (val: number) => {
    let sum = rounded(val * getMinuteInDateDef(endDate - startDate))
    setTotalSumOrder(sum)
    return sum
  }

  const dayPrise = (val: number) => {
    let sum = rounded(
      (val / (24 * 60)) * getMinuteInDateDef(endDate - startDate),
    )
    setTotalSumOrder(sum)
    return sum
  }

  const weekPrise = (val: number) => {
    let sum = rounded(
      (val / (7 * 24 * 60)) * getMinuteInDateDef(endDate - startDate),
    )
    setTotalSumOrder(sum)
    return sum
  }

  if (selectedСar && selectedRate === null) {
    return (
      <p className={styles.price}>
        Цена: от {selectedСar.priceMin} до {selectedСar.priceMax} ₽
      </p>
    )
  }

  if (selectedRate !== null && selectedRate.rateTypeId.id === rateType.day) {
    return (
      <p className={styles.price}>
        {endDate !== null && startDate !== null
          ? `Цена: ${addServicesSum(dayPrise(selectedRate.price))} ₽`
          : `Цена: ${
              (setTotalSumOrder(addServicesSum(selectedRate.price)),
              addServicesSum(selectedRate.price))
            } ₽`}
      </p>
    )
  }

  if (selectedRate !== null && selectedRate.rateTypeId.id === rateType.week) {
    return (
      <p className={styles.price}>
        {endDate !== null && startDate !== null
          ? `Цена: ${addServicesSum(weekPrise(selectedRate.price))} ₽`
          : `Цена: ${
              (setTotalSumOrder(addServicesSum(selectedRate.price)),
              addServicesSum(selectedRate.price))
            } ₽`}
      </p>
    )
  }

  if (selectedRate !== null && selectedRate.rateTypeId.id === rateType.minute) {
    return (
      <p className={styles.price}>
        {endDate !== null && startDate !== null
          ? `Цена: ${addServicesSum(minutePrise(selectedRate.price))} ₽`
          : `Цена: ${
              (setTotalSumOrder(addServicesSum(selectedRate.price)),
              addServicesSum(selectedRate.price))
            } ₽`}
      </p>
    )
  }

  return <p className={styles.price}></p>
}
