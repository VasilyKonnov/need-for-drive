export type TChooseCar = {
  filterValue: string
  handleFilterValue: (e: { target: { value: string } }) => void
  carCardValue: string
  handleCarCardValue: (e: { target: { value: string } }) => void
}
