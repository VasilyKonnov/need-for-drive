import { TabTotalView } from './TabTotalView'
import { TTabTotal } from './TabTotalTypes'

export const TabTotal: React.FC<TTabTotal> = ({ order }) => {
  return <TabTotalView order={order} />
}
