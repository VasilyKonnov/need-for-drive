import { useCallback, useEffect, useState } from 'react'
import { TOrder } from './OrderTypes'
import { OrderView } from './OrderView'

export const Order: React.FC<TOrder> = ({
  cityPoints,
  city,
  carModel,
  selectedCarColor,
  startDate,
  endDate,
  selectedRate,
  isFullTank,
  isNeedChildChair,
  isRightWheel,
}) => {
  return (
    <OrderView
      cityPoints={cityPoints}
      city={city}
      carModel={carModel}
      selectedCarColor={selectedCarColor}
      startDate={startDate ? new Date(startDate) : null}
      endDate={endDate ? new Date(endDate) : null}
      selectedRate={selectedRate}
      isFullTank={isFullTank}
      isNeedChildChair={isNeedChildChair}
      isRightWheel={isRightWheel}
    />
  )
}
