import styles from './CheckBox.module.scss'
import { TCheckBox } from './CheckBoxType'

export const CheckBox: React.FC<TCheckBox> = ({
  labelTitle,
  id,
  onChange,
  checked,
}) => {
  return (
    <label
      htmlFor={id}
      className={checked ? styles.checkBoxActive : styles.checkBox}
    >
      <span className={styles.simulator}></span>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <span>{labelTitle}</span>
    </label>
  )
}
