import { formatCurrency } from './formatters'
import Decimal from 'decimal.js';

describe('formatters', () => {
  it('formats currency values', () => {
    expect(formatCurrency(new Decimal(0))).toBe('$0.00')
    expect(formatCurrency(new Decimal(1))).toBe('$1.00')
    expect(formatCurrency(new Decimal(0.2))).toBe('$0.20')
    expect(formatCurrency(new Decimal(0.03))).toBe('$0.03')
    expect(formatCurrency(new Decimal(0.004))).toBe('$0.00')
    expect(formatCurrency(new Decimal(0.005))).toBe('$0.01')
    expect(formatCurrency(new Decimal(-1))).toBe('-$1.00')
  })
})