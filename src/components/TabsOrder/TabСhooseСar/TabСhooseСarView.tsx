import { memo } from 'react'
import { CarCard } from './../../СarСard/СarСard'
import { RadioButton } from './../../RadioButton/RadioButton'
import { TChooseCarView } from './TabСhooseСarTypes'
import styles from './TabСhooseСar.module.scss'
import { TCar } from '../../../store/cars'
import { checkCarImg } from '../../../utils/common'

export const TabСhooseСarView: React.FC<TChooseCarView> = memo(
  ({
    handlerFilterCategory,
    handlerCarCardValue,
    carsData,
    carsCategory,
    filterStateCarCategory,
    selectedCarId,
  }) => {
    return (
      <>
        <form>
          <RadioButton
            filterVal={'all'}
            filterState={filterStateCarCategory}
            onChange={handlerFilterCategory}
            labelTitle={'Все модели'}
            htmlForChoice={'all-car'}
            nameWrap={'chooseCar'}
          />
          {carsCategory
            ? carsCategory.map((carCategory, id) => {
                return (
                  <RadioButton
                    key={id}
                    filterVal={carCategory.id}
                    filterState={filterStateCarCategory}
                    onChange={handlerFilterCategory}
                    labelTitle={carCategory.name}
                    htmlForChoice={carCategory.id}
                    nameWrap={'chooseCar'}
                  />
                )
              })
            : null}
        </form>
        <div className={styles.carList}>
          {carsData
            ? carsData.map((car: TCar, id: number) => {
                return (
                  <CarCard
                    key={id}
                    onChange={handlerCarCardValue}
                    selectedСarId={selectedCarId}
                    nameWrap="cards-cars"
                    htmlForChoice={car.id}
                    title={car.name}
                    prise={car.priceMin + '-' + car.priceMax}
                    imgUrl={checkCarImg(car.thumbnail.path)}
                  />
                )
              })
            : null}
        </div>
      </>
    )
  },
)
