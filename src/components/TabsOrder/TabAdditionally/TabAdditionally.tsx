import { useCallback, useState } from 'react'
import { TabAdditionallyView } from './TabAdditionallyView'
import { colorAdditionally, tariffRate } from '../../../constants/constants'

export const TabAdditionally: React.FC = () => {
  const [isFullTank, setIsFullTank] = useState(false)
  const [isRightHand, setIsRightHand] = useState(false)
  const [isBabySeat, setIsBabySeat] = useState(false)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [carColor, setCarColor] = useState(colorAdditionally.anyСolour)
  const [carTarif, setCarTarif] = useState(tariffRate.byMinute)

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
      setCarColor(value)
    },
    [setCarColor],
  )

  const handlerCarTarif = useCallback(
    (e: { target: { value: string } }) => {
      const { value } = e.target
      setCarTarif(value)
    },
    [setCarTarif],
  )

  return (
    <TabAdditionallyView
      isFullTank={isFullTank}
      isRightHand={isRightHand}
      isBabySeat={isBabySeat}
      startDate={startDate}
      endDate={endDate}
      handleFullTank={handleFullTank}
      handleBabySeat={handleBabySeat}
      handleRightHand={handleRightHand}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      handlerColorRadioButton={handlerColorRadioButton}
      carColor={carColor}
      handlerCarTarif={handlerCarTarif}
      carTarif={carTarif}
    />
  )
}
