export type TRadioButton = {
  filterVal: string | number
  filterState: string | number
  onChange: (e: { target: { value: any } }) => void
  labelTitle: string
  htmlForChoice: string
  nameWrap: string
}
