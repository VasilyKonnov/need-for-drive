import { useCallback, useState } from 'react'
import { TOrder } from './OrderTypes'
import { OrderView } from './OrderView'

export const Order: React.FC<TOrder> = ({
  setIsTabLocation,
  setIsTabСhooseСar,
  isTabLocation,
  isTabСhooseСar,
}) => {
  const [isMobileOrderOpen, setIsMobileOrderOpen] = useState(true)

  const toggleMobileOrderOpen = useCallback(() => {
    setIsMobileOrderOpen(!isMobileOrderOpen)
  }, [isMobileOrderOpen])

  const handleNextTab = useCallback(() => {
    setIsTabLocation(!isTabLocation)
    setIsTabСhooseСar(!isTabСhooseСar)
  }, [isTabLocation, isTabСhooseСar, setIsTabLocation, setIsTabСhooseСar])

  return (
    <OrderView
      toggleMobileOrderOpen={toggleMobileOrderOpen}
      isMobileOrderOpen={isMobileOrderOpen}
      handleNextTab={handleNextTab}
    />
  )
}
