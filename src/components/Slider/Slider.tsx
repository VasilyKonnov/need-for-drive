import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { TSlider, TSliderItem } from './SliderType'
import 'react-slick/style/slick.scss'
import styles from './Slider.module.scss'
import './Slider.scss'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const styleSliderItem = {
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
}

export const Carousel: React.FC<TSlider> = ({ sliderData }) => {
  return (
    <Slider {...settings}>
      {sliderData.map((slider: TSliderItem, index: number) => {
        return (
          <div key={index} className={styles.sliderItem}>
            <div
              className={styles.item}
              style={{
                background: `url(${slider.img})`,
                ...styleSliderItem,
              }}
            >
              <div className={styles.wrapper}>
                <h2>{slider.title}</h2>
                <p>{slider.description}</p>
                <Link to={slider.url}>
                  <button className={styles[`${slider.button}`]}>
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </Slider>
  )
}
