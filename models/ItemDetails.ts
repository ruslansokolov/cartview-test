import Decimal from "decimal.js"

export interface ItemDetails {
  picture: string
  name: string
  quantity: number
  price: Decimal
}