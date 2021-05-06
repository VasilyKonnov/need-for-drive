import React, { SetStateAction } from 'react'

export type TOrder = {
  setIsTabLocation: React.Dispatch<SetStateAction<boolean>>
  setIsTabСhooseСar: React.Dispatch<SetStateAction<boolean>>
  isTabLocation: boolean
  isTabСhooseСar: boolean
}
export type TOrderView = {
  toggleMobileOrderOpen: () => void
  isMobileOrderOpen: boolean
  handleNextTab: () => void
}
