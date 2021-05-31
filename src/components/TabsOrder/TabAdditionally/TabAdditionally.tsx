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
}) => {
  const [isFullTank, setIsFullTank] = useState(false)
  const [isRightHand, setIsRightHand] = useState(false)
  const [isBabySeat, setIsBabySeat] = useState(false)

  const handleFullTank = useCallback(() => {
    setIsFullTank(!isFullTank)
  }, [isFullTank])

  const handleRightHand = useCallback(() => {
    setIsRightHand(!isRightHand)
  }, [isRightHand])

  const handleBabySeat = useCallback(() => {
    setIsBabySeat(!isBabySeat)
  }, [isBabySeat])

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
      isRightHand={isRightHand}
      isBabySeat={isBabySeat}
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
