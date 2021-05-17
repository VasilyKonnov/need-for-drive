import { TCarCardView } from './СarСardType'
import styles from './СarСard.module.scss'

export const CarCard: React.FC<TCarCardView> = ({
  title,
  prise,
  imgUrl,
  htmlForChoice,
  priseState,
  nameWrap,
  onChange,
}) => {
  return (
    <>
      <label
        htmlFor={htmlForChoice}
        className={
          prise === priseState ? styles.carListItemActive : styles.carListItem
        }
      >
        <h3>{title}</h3>
        <p>{prise}</p>
        <img src={imgUrl} alt={title} />
        <input
          className={styles.input}
          type="radio"
          id={htmlForChoice}
          name={nameWrap}
          value={prise}
          onChange={onChange}
        />
      </label>
    </>
  )
}
