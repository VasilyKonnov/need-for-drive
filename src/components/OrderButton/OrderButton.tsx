import { TOrderButton } from './OrderButtonTypes'
import styles from '../../pages/OrderPage/OrderPage.module.scss'
import { nameBtnOrder } from '../../constants/constants'
export const OrderButton: React.FC<TOrderButton> = ({
  activeTab,
  isMobileOrderOpen,
  handlerClickOrderButton,
  cityPoints,
  city,
  selectedСar,
  order,
  handlerModalConfirm,
}) => {
  return (
    <>
      {activeTab === 1 ? (
        <button
          className={isMobileOrderOpen ? 'button' : `button ${styles.smallBtn}`}
          onClick={(e) => handlerClickOrderButton(e, 1)}
          disabled={cityPoints && city ? false : true}
          data-id={2}
        >
          {nameBtnOrder.chooseModel}
        </button>
      ) : null}

      {activeTab === 2 ? (
        <button
          className={isMobileOrderOpen ? 'button' : `button ${styles.smallBtn}`}
          onClick={(e) => handlerClickOrderButton(e, 2)}
          disabled={selectedСar ? false : true}
          data-id={3}
        >
          {nameBtnOrder.additionally}
        </button>
      ) : null}

      {activeTab === 3 ? (
        <button
          className={isMobileOrderOpen ? 'button' : `button ${styles.smallBtn}`}
          onClick={(e) => handlerClickOrderButton(e, 3)}
          disabled={order ? false : true}
          data-id={4}
        >
          {nameBtnOrder.total}
        </button>
      ) : null}

      {activeTab === 4 ? (
        <button
          className={isMobileOrderOpen ? 'button' : `button ${styles.smallBtn}`}
          onClick={handlerModalConfirm}
          disabled={order ? false : true}
        >
          {nameBtnOrder.doOrder}
        </button>
      ) : null}
    </>
  )
}
