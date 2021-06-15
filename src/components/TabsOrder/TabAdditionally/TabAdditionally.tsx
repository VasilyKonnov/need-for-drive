import { useCallback, useEffect } from 'react'
import { TabAdditionallyView } from './TabAdditionallyView'
import { TTabAdditionally } from './TabAdditionallyTypes'
import { FetchingStateTypes } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import { ratesSelector } from '../../../store/rates/ratesSelector'
import { ratesAction } from '../../../store/rates/ratesAction'
import { Spinner } from './../../Spiner/Spiner'
import { TRate } from '../../../store/rates'
import { orderStatusTypesAction } from '../../../store/orderStatusTypes/orderStatusTypesAction'
import { orderStatusTypesSelector } from '../../../store/orderStatusTypes/orderStatusTypesSelector'

export const TabAdditionally: React.FC<TTabAdditionally> = ({
  carColors,
  setSelectedCarColor,
  selectedCarColor,
  setStartDate,
  startDate,
  setEndDate,
  endDate,
  selectedRate,
  setSelectedRate,
  rateId,
  setRateId,
  setIsFullTank,
  setIsNeedChildChair,
  setIsRightWheel,
  isFullTank,
  isNeedChildChair,
  isRightWheel,
}) => {
  const dispatch = useDispatch()

  const { data: rates, fetchingState: fetchingStateRates } = useSelector(
    ratesSelector,
  )

  const { fetchingState: fetchingStateOrderStatusTypes } = useSelector(
    orderStatusTypesSelector,
  )

  const handlerFullTank = useCallback(() => {
    setIsFullTank(!isFullTank)
  }, [isFullTank, setIsFullTank])

  const handlerRightHand = useCallback(() => {
    setIsRightWheel(!isRightWheel)
  }, [isRightWheel, setIsRightWheel])

  const handlerBabySeat = useCallback(() => {
    setIsNeedChildChair(!isNeedChildChair)
  }, [isNeedChildChair, setIsNeedChildChair])

  const handlerColorRadioButton = useCallback(
    (e: { target: { value: string } }) => {
      const { value } = e.target
      setSelectedCarColor(value)
    },
    [setSelectedCarColor],
  )
  const filterRates = (rates: TRate[]) => {
    return rates.filter(
      (rate) =>
        rate.id !== null && rate.rateTypeId !== null && rate.price !== null,
    )
  }

  const handlerCarTarif = useCallback(
    (e: { target: { value: string } }) => {
      const { value } = e.target
      setRateId(value)
    },
    [setRateId],
  )

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
  }, [rateId, rates, setSelectedRate])

  useEffect(() => {
    if (fetchingStateOrderStatusTypes === FetchingStateTypes.none) {
      dispatch(orderStatusTypesAction.list())
    }
  }, [dispatch, fetchingStateOrderStatusTypes])

  if (rates.length > 0) {
    return (
      <TabAdditionallyView
        isFullTank={isFullTank}
        isRightWheel={isRightWheel}
        isNeedChildChair={isNeedChildChair}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        startDate={startDate}
        endDate={endDate}
        handlerFullTank={handlerFullTank}
        handlerBabySeat={handlerBabySeat}
        handlerRightHand={handlerRightHand}
        handlerColorRadioButton={handlerColorRadioButton}
        selectedCarColor={selectedCarColor}
        carColors={carColors}
        handlerCarTarif={handlerCarTarif}
        rates={filterRates(rates)}
        selectedRate={selectedRate}
      />
    )
  } else {
    return <Spinner />
  }
}
