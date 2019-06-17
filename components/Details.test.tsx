import React from 'react'
import { ItemDetails } from '../models'
import { shallow } from 'enzyme'
import { Details } from './Details'
import Decimal from 'decimal.js'

describe('<Details />', () => {
  it('shows item details', () => {
    const details: ItemDetails = {
      picture: 'http://local/picture',
      name: 'item',
      quantity: 5,
      price: new Decimal(15.5),
    }
    const target = shallow(<Details details={details} />)

    expect(target.findWhere(node => 
      node.prop('source') && node.prop('source').uri === 'http://local/picture').length).toBe(1)
    expect(target.findWhere(node => node.text() === 'item').length).toBe(1)
    expect(target.findWhere(node => node.text() === '5').length).toBe(1)
    expect(target.findWhere(node => node.text() === '$15.50').length).toBe(1)
  })
})