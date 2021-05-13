import { useCallback, useState } from 'react'
import { filterVal } from '../../../constants/constants'
import { TabСhooseСarView } from './TabСhooseСarView'

export const TabСhooseСar: React.FC = () => {
  const [filterValue, setFilterValue] = useState(filterVal.allModels)

  const handleFilterValue = useCallback(
    (e: { target: { value: string } }) => {
      const { value } = e.target
      setFilterValue(value)
    },
    [setFilterValue],
  )

  return (
    <TabСhooseСarView
      filterValue={filterValue}
      handleFilterValue={handleFilterValue}
    />
  )
}
