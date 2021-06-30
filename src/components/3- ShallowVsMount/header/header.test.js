import React from 'react'
import { shallow, mount } from 'enzyme'
import Header from './index'

describe('Header Component', () => {
  it('shallow', () => {
    const wrapper = shallow(<Header />)
    console.log('******* SHALLOW *******')
    console.log(wrapper.debug())
    console.log('******* SHALLOW *******')
  })

  it('mount', () => {
    console.log('******* MOUNT *******')
    const wrapper = mount(<Header />)
    console.log(wrapper.debug())
    console.log('******* MOUNT *******')
  })
})
