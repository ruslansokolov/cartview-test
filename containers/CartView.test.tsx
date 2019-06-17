import React from 'react'
import { PricingData } from '../models'
import { shallow } from 'enzyme'
import Decimal from 'decimal.js'
import { CartView } from './CartView'

describe('<CartView />', () => {
  const data: PricingData = {
    summary:  {
      subtotal: new Decimal(3.5),
      savings: new Decimal(0.33),
      discount: undefined,
      tax: new Decimal(0.1),
      total: new Decimal(100),
      zip: '01234'
    },
    item: {
      picture: 'http://local/picture',
      name: 'item',
      quantity: 5,
      price: new Decimal(15.5),
    },
  }

  const findProp = (target, prop) => {
    return target.findWhere(node => node.prop(prop)).first().prop(prop)
  }

  it('shows summary and details', () => {
    const dummy = (): any => {}
    const target = shallow(
      <CartView 
        isLoading={false} pricingData={data} error={null}
        fetchPricingData={dummy} applyPromoCode={dummy} resetError={dummy} />
    )

    expect(findProp(target, 'summary').subtotal.toNumber()).toBeCloseTo(3.5)
    expect(findProp(target, 'summary').savings.toNumber()).toBeCloseTo(0.33)
    expect(findProp(target, 'summary').discount).toBeUndefined()
    expect(findProp(target, 'summary').tax.toNumber()).toBeCloseTo(0.1)
    expect(findProp(target, 'summary').total.toNumber()).toBeCloseTo(100)
    expect(findProp(target, 'summary').zip).toBe('01234')
    expect(findProp(target, 'details').picture).toBe('http://local/picture')
    expect(findProp(target, 'details').name).toBe('item')
    expect(findProp(target, 'details').quantity).toBe(5)
    expect(findProp(target, 'details').price.toNumber()).toBeCloseTo(15.5)
  })
})