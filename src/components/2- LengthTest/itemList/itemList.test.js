import React from 'react'
import { shallow } from 'enzyme'
import ItemList from './index'

describe('Item List Component', () => {
  it('should list have 3 elements', () => {
    const wrapper = shallow(<ItemList />)
    const li = wrapper.find('li')

    expect(li).toHaveLength(3)
  })

  it('should increment button adds one element to list', () => {
    const wrapper = shallow(<ItemList />)
    const button = wrapper.find('button')
    button.simulate('click')
    const li = wrapper.find('li')

    expect(li).toHaveLength(4)
  })
})
