import { OrderView } from './OrderView'
import { useCallback, useState } from 'react'

export const Order: React.FC = () => {
  const [isMobileOrderOpen, setIsMobileOrderOpen] = useState(true)
  const toggleMobileOrderOpen = useCallback(() => {
    setIsMobileOrderOpen(!isMobileOrderOpen)
  }, [isMobileOrderOpen])

  return (
    <OrderView
      toggleMobileOrderOpen={toggleMobileOrderOpen}
      isMobileOrderOpen={isMobileOrderOpen}
    />
  )
}
