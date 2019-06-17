import React from 'react'
import jest from 'jest-mock'
import { Text } from 'react-native'
import { shallow } from 'enzyme'

import { Collapsible } from './Collapsible';

describe('<Collapsible />', () => {
  it('shows children when expanded', () => {
    const target = shallow(
      <Collapsible showChildren={true} title="" titleExpanded="" onToggle={() => {}}>
        <Text testID="child">child</Text>
      </Collapsible>
    )
    expect(target.findWhere(node => node.prop('testID') === 'child').length).toBe(1)
  })

  it('hides children when collapsed', () => {
    const target = shallow(
      <Collapsible showChildren={false} title="" titleExpanded="" onToggle={() => {}}>
        <Text testID="child">child</Text>
      </Collapsible>
    )
    expect(target.findWhere(node => node.prop('testID') === 'child').length).toBe(0)
  })
  
  it('shows correct title when expanded', () => {
    const target = shallow(
      <Collapsible showChildren={true} title="collapsed" titleExpanded="expanded" onToggle={() => {}} />
    )
    expect(target.findWhere(node => node.text() === 'expanded').length).toBe(1)
    expect(target.findWhere(node => node.text() === '-').length).toBe(1)
  })

  it('shows correct title when collased', () => {
    const target = shallow(
      <Collapsible showChildren={false} title="collapsed" titleExpanded="expanded" onToggle={() => {}} />
    )
    expect(target.findWhere(node => node.text() === 'collapsed').length).toBe(1)
    expect(target.findWhere(node => node.text() === '+').length).toBe(1)
  })

  it('calls onToggle when button is pressed', () => {
    const mock = jest.fn()
    const target = shallow(
      <Collapsible showChildren={false} title="" titleExpanded="" onToggle={mock} />
    )
    target.findWhere(node => node.prop('testID') === 'toggle-').props().onPress()
    expect(mock.mock.calls.length).toBe(1)
  })

  it('sets testID', () => {
    const mock = jest.fn()
    const target = shallow(
      <Collapsible showChildren={false} title="show" titleExpanded="" onToggle={mock} />
    )
    expect(target.findWhere(node => node.prop('testID') === 'toggle-show').length).toBe(1)
  })
})