import React from 'react'
import { shallow } from 'enzyme'
import Customer from './index'

describe('Customer Component', () => {
  it('should render when customer id changed', (done) => {
    global.fetch = jest.fn()
    const firstCustomer = { id: 1, name: 'Leanne Graham' }
    const secondCustomer = { id: 2, name: 'Ervin Howell' }

    const wrapper = shallow(<Customer id={firstCustomer.id} />)

    wrapper.setProps({ id: secondCustomer.id })

    fetch.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve(secondCustomer)
        }
      })
    })

    const componentDidUpdate = wrapper
      .instance()
      .componentDidUpdate({ id: firstCustomer.id }, { customer: { name: firstCustomer.name } })

    componentDidUpdate.then(() => {
      expect(wrapper.find('p').text()).toContain(secondCustomer.name)
      expect(wrapper.find('span').length).toBe(0)
      fetch.mockClear()
      done()
    })
  })
})
