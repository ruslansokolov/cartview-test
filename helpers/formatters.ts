import Decimal from "decimal.js"

export const formatCurrency = (value: Decimal) => {
  return `${value.isNegative() ? '-' : ''}$${value.absoluteValue().toFixed(2)}`
}