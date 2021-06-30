import React from 'react'
import { shallow } from 'enzyme'
import User from './index'

describe('User Component', () => {
  it('loading should render', () => {
    const wrapper = shallow(<User />)
    expect(wrapper.find('span')).toHaveLength(1)
  })

  it('should show the user name and hide the loading span after api call success', (done) => {
    global.fetch = jest.fn()

    const wrapper = shallow(<User />)
    const user = { name: 'Leanne Graham' }

    fetch.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve(user)
        }
      })
    })

    const didMount = wrapper.instance().componentDidMount()

    didMount.then(() => {
      expect(wrapper.find('p').text()).toContain(user.name)
      expect(wrapper.find('span').length).toBe(0)
      fetch.mockClear()
      done()
    })
  })
})
