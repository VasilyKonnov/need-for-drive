import { TCarCardView } from './СarСardType'
import styles from './СarСard.module.scss'

export const CarCard: React.FC<TCarCardView> = ({
  title,
  prise,
  imgUrl,
  htmlForChoice,
  selectedСarId,
  nameWrap,
  onChange,
}) => {
  return (
    <>
      <label
        htmlFor={htmlForChoice}
        className={
          htmlForChoice === selectedСarId
            ? styles.carListItemActive
            : styles.carListItem
        }
      >
        <h3>{title}</h3>
        <p>{prise}</p>
        <div
          className={styles.cardImg}
          style={{ background: `url(${imgUrl})` }}
        ></div>
        <input
          className={styles.input}
          type="radio"
          id={htmlForChoice}
          name={nameWrap}
          value={htmlForChoice}
          onChange={onChange}
        />
      </label>
    </>
  )
}
