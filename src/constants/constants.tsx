import imgSlid1 from '../assets/slide1.jpg'
import imgSlid2 from '../assets/slide2.jpg'
import imgSlid3 from '../assets/slide3.jpg'
import imgSlid4 from '../assets/slide4.jpg'
import carImg from '../assets/car.jpg'

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

export const filterVal = {
  allModels: 'Все модели',
  economy: 'Эконом',
  premium: 'Премиум',
}

export const colorAdditionally = {
  anyСolour: 'Любой',
  red: 'Красный',
  blue: 'Голубой',
}

export const tariffRate = {
  byMinute: '7',
  forADay: '1999',
}

export const nameBtnOrder = {
  chooseModel: 'Выбрать модель',
  additionally: 'Дополнительно',
  total: 'Дополнительно',
  order: 'Заказ',
  cancel: 'Отменить',
  confirm: 'Подтвердить',
  goBack: 'Вернуться',
}

export const tabsOrder = [
  { id: 1, label: 'Местоположение', disabled: false },
  { id: 2, label: 'Модель', disabled: true },
  { id: 3, label: 'Дополнительно', disabled: true },
  { id: 4, label: 'Итого', disabled: true },
]

export const listCars = [
  {
    title: 'SONATA',
    prise: '10 001 - 32 000',
    imgUrl: carImg,
  },
  {
    title: 'SONATA',
    prise: '10 002 - 32 000',
    imgUrl: carImg,
  },
  {
    title: 'SONATA',
    prise: '10 003 - 32 000',
    imgUrl: carImg,
  },
  {
    title: 'SONATA',
    prise: '10 004 - 32 000',
    imgUrl: carImg,
  },
  {
    title: 'SONATA',
    prise: '10 005 - 32 000',
    imgUrl: carImg,
  },
  {
    title: 'SONATA',
    prise: '10 006 - 32 000',
    imgUrl: carImg,
  },
  {
    title: 'SONATA',
    prise: '10 007 - 32 000',
    imgUrl: carImg,
  },
  {
    title: 'SONATA',
    prise: '10 008 - 32 000',
    imgUrl: carImg,
  },
  {
    title: 'SONATA',
    prise: '10 009 - 32 000',
    imgUrl: carImg,
  },
  {
    title: 'SONATA',
    prise: '10 010 - 32 000',
    imgUrl: carImg,
  },
  {
    title: 'SONATA',
    prise: '10 011 - 32 000',
    imgUrl: carImg,
  },
  {
    title: 'SONATA',
    prise: '10 012 - 32 000',
    imgUrl: carImg,
  },
  {
    title: 'SONATA',
    prise: '10 013 - 32 000',
    imgUrl: carImg,
  },
]

export const urlApi = 'https://api-factory.simbirsoft1.com'

export const rateType = {
  week: '5f622f029d3a610b850fd820',
  day: '5e26a082099b810b946c5d83',
  minute: '5e26a07f099b810b946c5d82',
}
