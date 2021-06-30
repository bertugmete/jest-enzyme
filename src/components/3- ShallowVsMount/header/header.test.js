import React from 'react'
import { shallow, mount } from 'enzyme'
import Header from './index'

describe('Header Component', () => {
  it('shallow', () => {
    const wrapper = shallow(<Header />)
  })

  it('mount', () => {
    const wrapper = mount(<Header />)
  })
})
