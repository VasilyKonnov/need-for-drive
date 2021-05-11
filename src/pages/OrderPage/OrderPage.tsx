import { useState } from 'react'
import {
  Layout,
  Order,
  TabLocation,
  TabСhooseСar,
  TabAdditionally,
  TabTotal,
} from '../../components'
import { TSelectValue } from './OrderPageTypes'
import locIcon from '../../assets/loc-icon.svg'
import arrowTriangle from '../../assets/arrow-triangle.svg'
import styles from './OrderPage.module.scss'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

export const OrderPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<TSelectValue>(null)
  const [isTabLocation, setIsTabLocation] = useState(false)
  const [isTabСhooseСar, setIsTabСhooseСar] = useState(false)
  const [isTabAdditionally, setIsTabAdditionally] = useState(false)
  const [isTabTotal, setIsTabTotal] = useState(true)
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false)

  const handleSelect = (val: TSelectValue) => {
    setSelectedOption(val)
  }
  // TODO:
  // Функцию для переключения табов отдельно пишу, первая идея собрать все сеты в массив
  // и фильтрам отбирать сет и делать его тру остальные фалс

  // disable будет зависить от наличия данных в конкретном шаге
  // Функция для сбора данных Заказа меняем текст кнопки и данные складываем в хранилище
  const handlerTabsOrder = () => {}

  return (
    <Layout>
      <div className={styles.header}>
        <div className={styles.container}>
          <p className={styles.title}>Need for drive</p>
          <p className={styles.location}>
            <img src={locIcon} alt="Иконка локации" />
            Ульяновск
          </p>
        </div>
      </div>
      <div className={styles.wrapTabs}>
        <div className={styles.container}>
          <button>Местоположение</button>
          <img src={arrowTriangle} alt="иконка" />
          <button>Модель</button>
          <img src={arrowTriangle} alt="иконка" />
          <button>Дополнительно</button>
          <img src={arrowTriangle} alt="иконка" />
          <button>Итого</button>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.orderContainer}>
          <div className={styles.tab}>
            {isTabLocation ? (
              <TabLocation
                selectedOption={selectedOption}
                handleSelect={handleSelect}
                options={options}
              />
            ) : (
              ''
            )}
            {isTabСhooseСar ? <TabСhooseСar /> : ''}
            {isTabAdditionally ? <TabAdditionally /> : ''}
            {isTabTotal ? <TabTotal /> : ''}
          </div>
          <div className={styles.order}>
            <Order
              setIsTabLocation={setIsTabLocation}
              setIsTabСhooseСar={setIsTabСhooseСar}
              isTabLocation={isTabLocation}
              isTabСhooseСar={isTabСhooseСar}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
