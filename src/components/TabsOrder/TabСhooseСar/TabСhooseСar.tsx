import { useCallback, useState } from 'react'
import { filterVal } from '../../../constants/constants'
import { TabСhooseСarView } from './TabСhooseСarView'

export const TabСhooseСar: React.FC = () => {
  const [filterValue, setFilterValue] = useState(filterVal.allModels)
  const [carCardValue, setCarCardValue] = useState('0.00')

  const handleFilterValue = useCallback(
    (e: { target: { value: string } }) => {
      const { value } = e.target
      setFilterValue(value)
    },
    [setFilterValue],
  )
  const handleCarCardValue = useCallback(
    (e: { target: { value: string } }) => {
      const { value } = e.target
      setCarCardValue(value)
    },
    [setFilterValue],
  )

  return (
    <TabСhooseСarView
      filterValue={filterValue}
      handleFilterValue={handleFilterValue}
      carCardValue={carCardValue}
      handleCarCardValue={handleCarCardValue}
    />
  )
}
