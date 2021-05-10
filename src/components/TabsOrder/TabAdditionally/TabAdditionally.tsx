import { useEffect, useState } from 'react'
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

  const handleFullTank = () => {
    setIsFullTank(!isFullTank)
  }

  const handleRightHand = () => {
    setIsRightHand(!isRightHand)
  }

  const handleBabySeat = () => {
    setIsBabySeat(!isBabySeat)
  }

  const handleColorRadioButton = (e: { target: { value: string } }) => {
    const { value } = e.target
    setCarColor(value)
  }

  const handleCarTarif = (e: { target: { value: string } }) => {
    const { value } = e.target
    console.log('handleCarTarif ', value)
    setCarTarif(value)
  }

  useEffect(() => {
    console.log('startDate - ', startDate)
  }, [startDate])

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
      handleColorRadioButton={handleColorRadioButton}
      carColor={carColor}
      handleCarTarif={handleCarTarif}
      carTarif={carTarif}
    />
  )
}
