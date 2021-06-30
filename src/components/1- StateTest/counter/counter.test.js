import React from 'react'
import { shallow } from 'enzyme'
import Counter from './index'
import renderer from 'react-test-renderer'

describe('Counter component', () => {
  it('Matches the snapshot', () => {
    const tree = renderer.create(<Counter />).toJSON()

    expect(tree).toMatchSnapshot()
  })
  it('counter state starts with 0', () => {
    const wrapper = shallow(<Counter />)
    expect(wrapper.find('p').text()).toEqual('Counter 0')
    expect(wrapper.state().count).toBe(0)
  })

  it('increment Button On Click', () => {
    const wrapper = shallow(<Counter />)
    const incrementButton = wrapper.find('button.increment')
    incrementButton.simulate('click')
    const text = wrapper.find('p').text()
    expect(text).toEqual('Counter 1')
  })

  it('decrement Button On Click', () => {
    const wrapper = shallow(<Counter />)
    const decrementButton = wrapper.find('button.decrement')
    decrementButton.simulate('click')
    const text = wrapper.find('p').text()
    expect(text).toEqual('Counter -1')
  })
})
