import { TCarId } from '../TabsOrder/TabСhooseСar/TabСhooseСarTypes'

export type TCarCardView = {
  title: string
  prise: string
  imgUrl: string
  htmlForChoice: string
  selectedСarId: TCarId
  nameWrap: string
  onChange: (e: { target: { value: any } }) => void
}
