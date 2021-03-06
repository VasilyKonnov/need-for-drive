import imgSlid1 from '../assets/slide1.jpg'
import imgSlid2 from '../assets/slide2.jpg'
import imgSlid3 from '../assets/slide3.jpg'
import imgSlid4 from '../assets/slide4.jpg'

export const sliderData = [
  {
    title: 'Бесплатный парковка',
    description:
      'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    img: imgSlid1,
    url: '#',
    button: 'green',
  },
  {
    title: 'Страховка',
    description: 'Полная страховка страховка автомобиля',
    img: imgSlid2,
    url: '#',
    button: 'blue',
  },
  {
    title: 'Бензин',
    description: 'Полный бак на любой заправке города за наш счёт',
    img: imgSlid3,
    url: '#',
    button: 'red',
  },
  {
    title: 'Обслуживание',
    description: 'Автомобиль проходит еженедельное ТО',
    img: imgSlid4,
    url: '#',
    button: 'violet',
  },
]

export const nameBtnOrder = {
  chooseModel: 'Выбрать модель',
  additionally: 'Дополнительно',
  total: 'Итого',
  order: 'Заказ',
  cancel: 'Отменить',
  confirm: 'Подтвердить',
  goBack: 'Вернуться',
  doOrder: 'Заказать',
}

export const tabsOrder = [
  { id: 1, label: 'Местоположение', disabled: false },
  { id: 2, label: 'Модель', disabled: true },
  { id: 3, label: 'Дополнительно', disabled: true },
  { id: 4, label: 'Итого', disabled: true },
]
export const tabsOrderCarsActive = [
  { id: 1, label: 'Местоположение', disabled: false },
  { id: 2, label: 'Модель', disabled: false },
  { id: 3, label: 'Дополнительно', disabled: true },
  { id: 4, label: 'Итого', disabled: true },
]

export const rateType = {
  week: '5f622f029d3a610b850fd820',
  weekSale: '60b9437e2aed9a0b9b7ed337',
  day: '5e26a082099b810b946c5d83',
  minute: '5e26a07f099b810b946c5d82',
}
export const dateOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
}

export const gMapApiKey = 'AIzaSyBmm-8GGqLITMbzUdK76mTH6oOz08UTlPw'
export const geocodingApiKey = 'AIzaSyBwhqu0zQJiJbtHL1eZMHOxnsyF3UFWJBs'
export const urlApi = 'https://api-factory.simbirsoft1.com'
