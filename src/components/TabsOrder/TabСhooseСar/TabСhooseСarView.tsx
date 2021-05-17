import { memo } from 'react'
import { CarCard } from './../../СarСard/СarСard'
import { filterVal, listCars } from '../../../constants/constants'
import { RadioButton } from './../../RadioButton/RadioButton'
import { TChooseCar } from './TabСhooseСarTypes'
import styles from './TabСhooseСar.module.scss'

export const TabСhooseСarView: React.FC<TChooseCar> = memo(
  ({ filterValue, handleFilterValue, handleCarCardValue, carCardValue }) => {
    return (
      <>
        <form>
          <RadioButton
            filterVal={filterVal.allModels}
            filterState={filterValue}
            onChange={handleFilterValue}
            labelTitle={'Все модели'}
            htmlForChoice={'Choice1'}
            nameWrap={'chooseCar'}
          />
          <RadioButton
            filterVal={filterVal.economy}
            filterState={filterValue}
            onChange={handleFilterValue}
            labelTitle={'Эконом'}
            htmlForChoice={'Choice2'}
            nameWrap={'chooseCar'}
          />
          <RadioButton
            filterVal={filterVal.premium}
            filterState={filterValue}
            onChange={handleFilterValue}
            labelTitle={'Премиум'}
            htmlForChoice={'Choice3'}
            nameWrap={'chooseCar'}
          />
        </form>
        <div className={styles.carList}>
          {listCars.map((car: any, id: number) => {
            return (
              <CarCard
                key={id}
                onChange={handleCarCardValue}
                priseState={carCardValue}
                nameWrap="cards cars"
                htmlForChoice={`cardCar${id}`}
                title={car.title}
                prise={car.prise}
                imgUrl={car.imgUrl}
              />
            )
          })}
        </div>
      </>
    )
  },
)
