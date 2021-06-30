import React, { Component } from 'react'

class Customer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customer: { name: '' }
    }
  }
  async componentDidMount() {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
      const customer = await res.json()
      this.setState({ customer })
    } catch {
      console.log('error occured')
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
        const customer = await res.json()
        this.setState({ customer })
      } catch {
        console.log('error occured')
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.customer.name ? (
          <p className="customer">customer:{this.state.customer.name}</p>
        ) : (
          <span className="spinner">Spinner</span>
        )}
      </div>
    )
  }
}

export default Customer
