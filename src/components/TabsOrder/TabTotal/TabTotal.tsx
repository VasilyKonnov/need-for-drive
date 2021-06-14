import { TabTotalView } from './TabTotalView'
import { TTabTotal } from './TabTotalTypes'

export const TabTotal: React.FC<TTabTotal> = ({ order }) => {
  if (order) {
    return (
      <TabTotalView
        dateFrom={order.dateFrom}
        name={order.carId.name}
        number={order.carId.number}
        description={order.carId.description}
        tank={order.carId.tank}
        path={order.carId.thumbnail.path}
      />
    )
  } else {
    return <h3>Что-то пошло не так, заказ не сформирован.</h3>
  }
}
