import React from 'react'
import jest from 'jest-mock'
import { shallow } from 'enzyme'
import { PromoCode } from './PromoCode'
import { ValidationError, ValidationType } from '../data'

describe('<PromoCode />', () => {
  it('shows code', () => {
    const target = shallow(
      <PromoCode code="promo" onCodeChange={() => {}} onCodeApply={() => {}} />
    )

    expect(target.findWhere(node => node.prop('value') === 'promo').length).toBe(1)
  })

  it('shows error', () => {
    const target = shallow(
      <PromoCode code="" error={new ValidationError('error', ValidationType.PromoCode)} onCodeChange={() => {}} onCodeApply={() => {}} />
    )

    expect(target.findWhere(node => node.text() === 'error').length).toBe(1)
  })

  it('calls onCodeChange when code is edited', () => {
    const mock = jest.fn()
    const target = shallow(
      <PromoCode code="" onCodeChange={mock} onCodeApply={() => {}} />
    )
    target.findWhere(node => node.prop('testID') === 'input-promo').props().onChangeText('promo')
    expect(mock.mock.calls.length).toBe(1)
    expect(mock.mock.calls[0][0]).toBe('promo')
  })

  it('calls onCodeApply when button is pressed', () => {
    const mock = jest.fn()
    const target = shallow(
      <PromoCode code="" onCodeChange={() => {}} onCodeApply={mock} />
    )
    target.findWhere(node => node.prop('testID') === 'apply-promo').props().onPress()
    expect(mock.mock.calls.length).toBe(1)
  })
})