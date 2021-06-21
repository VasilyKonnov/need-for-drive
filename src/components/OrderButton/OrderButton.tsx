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
          onClick={() => handlerClickOrderButton(2)}
          disabled={cityPoints && city ? false : true}
        >
          {nameBtnOrder.chooseModel}
        </button>
      ) : null}

      {activeTab === 2 ? (
        <button
          className={isMobileOrderOpen ? 'button' : `button ${styles.smallBtn}`}
          onClick={() => handlerClickOrderButton(3)}
          disabled={!selectedСar}
        >
          {nameBtnOrder.additionally}
        </button>
      ) : null}

      {activeTab === 3 ? (
        <button
          className={isMobileOrderOpen ? 'button' : `button ${styles.smallBtn}`}
          onClick={() => handlerClickOrderButton(4)}
          disabled={!order}
        >
          {nameBtnOrder.total}
        </button>
      ) : null}

      {activeTab === 4 ? (
        <button
          className={isMobileOrderOpen ? 'button' : `button ${styles.smallBtn}`}
          onClick={handlerModalConfirm}
          disabled={!order}
        >
          {nameBtnOrder.doOrder}
        </button>
      ) : null}
    </>
  )
}
