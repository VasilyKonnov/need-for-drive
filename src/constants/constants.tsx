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

export const filterVal = {
  allModels: 'Все модели',
  economy: 'Эконом',
  premium: 'Премиум',
}
