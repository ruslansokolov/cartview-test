import { ItemDetails } from './ItemDetails'
import { PurchaseSummary } from './PurchaseSummary'

export interface PricingData {
  summary: PurchaseSummary
  item: ItemDetails
}