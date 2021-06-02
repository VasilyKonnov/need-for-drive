import { useCallback, useState } from 'react'
import { TabAdditionallyView } from './TabAdditionallyView'
import { TTabAdditionally } from './TabAdditionallyTypes'

export const TabAdditionally: React.FC<TTabAdditionally> = ({
  carColors,
  setSelectedCarColor,
  selectedCarColor,
  setStartDate,
  startDate,
  setEndDate,
  endDate,
  selectedRate,
  rates,
  setRateId,
  isFullTank,
  setIsFullTank,
  setIsNeedChildChair,
  isNeedChildChair,
  setIsRightWheel,
  isRightWheel,
}) => {
  const handleFullTank = useCallback(() => {
    setIsFullTank(!isFullTank)
  }, [isFullTank])

  const handleRightHand = useCallback(() => {
    setIsRightWheel(!isRightWheel)
  }, [isRightWheel])

  const handleBabySeat = useCallback(() => {
    setIsNeedChildChair(!isNeedChildChair)
  }, [isNeedChildChair])

  const handlerColorRadioButton = useCallback(
    (e: { target: { value: string } }) => {
      const { value } = e.target
      setSelectedCarColor(value)
    },
    [setSelectedCarColor],
  )

  const handlerCarTarif = useCallback(
    (e: { target: { value: string } }) => {
      const { value } = e.target
      setRateId(value)
    },
    [setRateId],
  )

  return (
    <TabAdditionallyView
      isFullTank={isFullTank}
      isRightWheel={isRightWheel}
      isNeedChildChair={isNeedChildChair}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      startDate={startDate}
      endDate={endDate}
      handleFullTank={handleFullTank}
      handleBabySeat={handleBabySeat}
      handleRightHand={handleRightHand}
      handlerColorRadioButton={handlerColorRadioButton}
      selectedCarColor={selectedCarColor}
      carColors={carColors}
      handlerCarTarif={handlerCarTarif}
      rates={rates}
      selectedRate={selectedRate}
    />
  )
}
