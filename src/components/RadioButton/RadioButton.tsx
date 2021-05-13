import { TRadioButton } from './RadioButtonTypes'
import styles from './RadioButton.module.scss'

export const RadioButton: React.FC<TRadioButton> = ({
  filterVal,
  filterState,
  onChange,
  labelTitle,
  htmlForChoice,
  nameWrap,
}) => {
  return (
    <label
      htmlFor={htmlForChoice}
      className={
        filterVal === filterState
          ? styles.radioButtonActive
          : styles.radioButton
      }
    >
      <span className={styles.simulator}></span>
      <input
        type="radio"
        id={htmlForChoice}
        name={nameWrap}
        value={filterVal}
        onChange={onChange}
      />
      {labelTitle}
    </label>
  )
}
