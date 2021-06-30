import React, { Component } from 'react'
import Customer from '../customer'

class CustomerList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customerId: 1
    }
  }

  handleOnClick = (e) => {
    e.preventDefault()

    this.setState({ customerId: 2 })
  }

  render() {
    return (
      <div>
        <Customer id={this.state.customerId} />
        <button onClick={this.handleOnClick}>Get Id: 2 Customer</button>
      </div>
    )
  }
}

export default CustomerList
