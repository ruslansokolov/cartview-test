import { Decimal } from 'decimal.js'

export interface PurchaseSummary {
  subtotal: Decimal
  savings: Decimal
  discount: Decimal | undefined
  tax: Decimal
  total: Decimal
  zip: string
}