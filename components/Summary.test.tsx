import React from 'react'
import jest from 'jest-mock'
import { PricingData, PurchaseSummary } from '../models'
import { shallow } from 'enzyme'
import Decimal from 'decimal.js'
import { Summary } from './Summary';

describe('<Summary />', () => {
  const summary: PurchaseSummary = {
    subtotal: new Decimal(3.5),
    savings: new Decimal(0.33),
    discount: undefined,
    tax: new Decimal(0.1),
    total: new Decimal(100),
    zip: '01234'
  }
  const tip = 'Picking up your order in the store helps cut costs, and we pass the savings on to you.'

  it('shows summary without discount', () => {
    const target = shallow(
      <Summary summary={summary} showSavingsTip={false} onSavingsTipToggle={() => {}} />
    )

    expect(target.findWhere(node => node.text() === '$3.50').length).toBe(1)
    expect(target.findWhere(node => node.text() === '-$0.33').length).toBe(1)
    expect(target.findWhere(node => node.text() === 'Discount').length).toBe(0)
    expect(target.findWhere(node => node.text() === '$0.10').length).toBe(1)
    expect(target.findWhere(node => node.text() === '$100.00').length).toBe(1)
    expect(target.findWhere(node => node.text() === '01234').length).toBe(1)
  })

  it('shows summary with discount', () => {
    const summaryWithDiscount = {
      ...summary,
      discount: new Decimal(0.2),
    }
    const target = shallow(
      <Summary summary={summaryWithDiscount} showSavingsTip={false} onSavingsTipToggle={() => {}} />
    )

    expect(target.findWhere(node => node.text() === '$3.50').length).toBe(1)
    expect(target.findWhere(node => node.text() === '-$0.33').length).toBe(1)
    expect(target.findWhere(node => node.text() === 'Discount').length).toBe(1)
    expect(target.findWhere(node => node.text() === '-$0.20').length).toBe(1)
    expect(target.findWhere(node => node.text() === '$0.10').length).toBe(1)
    expect(target.findWhere(node => node.text() === '$100.00').length).toBe(1)
    expect(target.findWhere(node => node.text() === '01234').length).toBe(1)
  })

  it('hides savings tip', () => {
    const target = shallow(
      <Summary summary={summary} showSavingsTip={true} onSavingsTipToggle={() => {}} />
    )

    expect(target.findWhere(node => node.text() === tip).length).toBe(1)
  })

  it('hides savings tip', () => {
    const target = shallow(
      <Summary summary={summary} showSavingsTip={false} onSavingsTipToggle={() => {}} />
    )

    expect(target.findWhere(node => node.text() === tip).length).toBe(0)
  })

  it('calls onSavingsTipToggle when label is pressed', () => {
    const mock = jest.fn()
    const target = shallow(
      <Summary summary={summary} showSavingsTip={false} onSavingsTipToggle={mock} />
    )
    target.findWhere(node => node.prop('testID') === 'toggle-savings-tip').props().onPress()
    expect(mock.mock.calls.length).toBe(1)
  })
})