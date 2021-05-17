import React, { memo } from 'react'
import { CheckBox, RadioButton } from '../../../components'
import DatePicker from 'react-datepicker'
import { colorAdditionally, tariffRate } from '../../../constants/constants'
import { TabAdditionallyimport } from './TabAdditionallyTypes'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './TabAdditionally.module.scss'
import './datePickerStyled.scss'

export const TabAdditionallyView: React.FC<TabAdditionallyimport> = memo(
  ({
    isFullTank,
    isBabySeat,
    isRightHand,
    startDate,
    endDate,
    handleFullTank,
    handleBabySeat,
    handleRightHand,
    setStartDate,
    setEndDate,
    carColor,
    handleColorRadioButton,
    handleCarTarif,
    carTarif,
  }) => {
    return (
      <>
        <form>
          <div className={styles.chooseColor}>
            <p className={styles.titleBox}>Цвет</p>
            <RadioButton
              filterVal={colorAdditionally.anyСolour}
              filterState={carColor}
              onChange={handleColorRadioButton}
              labelTitle={'Любой'}
              htmlForChoice={'Choice1'}
              nameWrap={'chooseColor'}
            />
            <RadioButton
              filterVal={colorAdditionally.red}
              filterState={carColor}
              onChange={handleColorRadioButton}
              labelTitle={'Красный'}
              htmlForChoice={'Choice2'}
              nameWrap={'chooseColor'}
            />
            <RadioButton
              filterVal={colorAdditionally.blue}
              filterState={carColor}
              onChange={handleColorRadioButton}
              labelTitle={'Голубой'}
              htmlForChoice={'Choice3'}
              nameWrap={'chooseColor'}
            />
          </div>

          <div className={styles.rentDate}>
            <p className={styles.titleBox}>Дата аренды</p>
            <div className={styles.wrapperDate}>
              <span>C</span>
              <DatePicker
                minDate={startDate ? startDate : new Date()}
                placeholderText="Введите дату и время"
                showTimeSelect
                dateFormat="dd-MM-yyyy, hh:mm"
                selected={startDate}
                onChange={(date: any) => {
                  setStartDate(date)
                }}
                isClearable
                locale="Ru"
              />
            </div>
            <div className={styles.wrapperDate}>
              <span>По</span>
              <DatePicker
                minDate={startDate ? startDate : new Date()}
                placeholderText="Введите дату и время"
                showTimeSelect
                dateFormat="dd-MM-yyyy, hh:mm"
                selected={endDate}
                onChange={(date: any) => setEndDate(date)}
                isClearable
                locale="Ru"
              />
            </div>
          </div>

          <div className={styles.rate}>
            <p className={styles.titleBox}>Тариф</p>
            <RadioButton
              filterVal={tariffRate.byMinute}
              filterState={carTarif}
              onChange={handleCarTarif}
              labelTitle={`Поминутно, ${tariffRate.byMinute}₽/мин`}
              htmlForChoice={'Choice4'}
              nameWrap={'chooseTarif'}
            />
            <RadioButton
              filterVal={tariffRate.forADay}
              filterState={carTarif}
              onChange={handleCarTarif}
              labelTitle={`На сутки, ${tariffRate.forADay}₽/сутки`}
              htmlForChoice={'Choice5'}
              nameWrap={'chooseTarif'}
            />
          </div>

          <div className={styles.services}>
            <p className={styles.titleBox}>Доп услуги</p>

            <CheckBox
              labelTitle={'Полный бак, 500р'}
              id={'happy'}
              checked={isFullTank}
              onChange={handleFullTank}
            />
            <CheckBox
              labelTitle={'Детское кресло, 200р'}
              id={'happy2'}
              checked={isBabySeat}
              onChange={handleBabySeat}
            />
            <CheckBox
              labelTitle={'Правый руль, 1600р'}
              id={'happy3'}
              checked={isRightHand}
              onChange={handleRightHand}
            />
          </div>
        </form>
      </>
    )
  },
)
