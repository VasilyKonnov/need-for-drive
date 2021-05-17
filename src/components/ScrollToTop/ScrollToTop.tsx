import { useEffect, useState } from 'react'
import styles from './ScrollToTop.module.scss'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <div className={styles.button} onClick={scrollToTop}>
          &#9650;
          <span>Up!</span>
        </div>
      )}
    </>
  )
}
