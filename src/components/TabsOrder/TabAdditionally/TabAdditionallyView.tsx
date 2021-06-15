import React, { memo } from 'react'
import { CheckBox, RadioButton } from '../../../components'
import DatePicker from 'react-datepicker'
import { TTabAdditionallyView } from './TabAdditionallyTypes'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './TabAdditionally.module.scss'
import './datePickerStyled.scss'
import { TRate } from '../../../store/rates'

export const TabAdditionallyView: React.FC<TTabAdditionallyView> = memo(
  ({
    isFullTank,
    isNeedChildChair,
    isRightWheel,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    handlerFullTank,
    handlerBabySeat,
    handlerRightHand,
    selectedCarColor,
    carColors,
    handlerColorRadioButton,
    handlerCarTarif,
    rates,
    selectedRate,
  }) => {
    return (
      <>
        <form>
          <div className={styles.chooseColor}>
            <p className={styles.titleBox}>Цвет</p>
            <RadioButton
              filterVal={'Любой'}
              filterState={selectedCarColor}
              onChange={handlerColorRadioButton}
              labelTitle={'Любой'}
              htmlForChoice={`colorAny`}
              nameWrap={'chooseColor'}
            />
            {carColors
              ? carColors.map((color: string, id: number) => {
                  return (
                    <RadioButton
                      filterVal={color}
                      filterState={selectedCarColor}
                      onChange={handlerColorRadioButton}
                      labelTitle={color}
                      htmlForChoice={`color${id}`}
                      nameWrap={'chooseColor'}
                    />
                  )
                })
              : null}
          </div>

          <div className={styles.rentDate}>
            <p className={styles.titleBox}>Дата аренды</p>
            <div className={styles.wrapperDate}>
              <span>C</span>
              <DatePicker
                minDate={startDate ? startDate : new Date()}
                placeholderText="Введите дату и время"
                showTimeSelect
                dateFormat={'dd-MM-yyyy, hh:mm'}
                selected={startDate}
                onChange={(date: any) => {
                  date ? setStartDate(date.getTime()) : setStartDate(null)
                  setEndDate(null)
                }}
                isClearable
              />
            </div>
            <div className={styles.wrapperDate}>
              <span>По</span>
              <DatePicker
                minDate={startDate ? startDate : new Date()}
                placeholderText="Введите дату и время"
                showTimeSelect
                dateFormat={'dd-MM-yyyy, hh:mm'}
                selected={endDate}
                onChange={(date: any) =>
                  date ? setEndDate(date.getTime()) : setEndDate(null)
                }
                isClearable
              />
            </div>
          </div>

          <div className={styles.rate}>
            <p className={styles.titleBox}>Тариф</p>
            {rates.length > 0
              ? rates.map((rate: TRate, id: number) => {
                  return (
                    <RadioButton
                      key={id}
                      filterVal={rate.id}
                      filterState={selectedRate ? selectedRate.id : ''}
                      onChange={handlerCarTarif}
                      labelTitle={`${rate.rateTypeId.name}, ${rate.price} ₽/${rate.rateTypeId.unit} `}
                      htmlForChoice={rate.id}
                      nameWrap={'chooseTarif'}
                    />
                  )
                })
              : null}
          </div>
          <div className={styles.services}>
            <p className={styles.titleBox}>Доп услуги</p>
            <CheckBox
              labelTitle={'Полный бак, 500р'}
              id={'happy'}
              checked={isFullTank}
              onChange={handlerFullTank}
            />
            <CheckBox
              labelTitle={'Детское кресло, 200р'}
              id={'happy2'}
              checked={isNeedChildChair}
              onChange={handlerBabySeat}
            />
            <CheckBox
              labelTitle={'Правый руль, 1600р'}
              id={'happy3'}
              checked={isRightWheel}
              onChange={handlerRightHand}
            />
          </div>
        </form>
      </>
    )
  },
)
