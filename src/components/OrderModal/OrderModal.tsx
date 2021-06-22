import { nameBtnOrder } from '../../constants/constants'
import styles from '../../pages/OrderPage/OrderPage.module.scss'
import { TOrderModal } from './OrderModalTypes'

export const OrderModal: React.FC<TOrderModal> = ({
  sendOrder,
  handlerModalConfirm,
}) => {
  return (
    <div className={styles.tabTotalModal}>
      <div>
        <p>Подтвердить заказ</p>
        <button className={`button ${styles.confirmBtn}`} onClick={sendOrder}>
          {nameBtnOrder.confirm}
        </button>
        <button
          className={`button--crimson ${styles.confirmBtn}`}
          onClick={handlerModalConfirm}
        >
          {nameBtnOrder.goBack}
        </button>
      </div>
    </div>
  )
}
