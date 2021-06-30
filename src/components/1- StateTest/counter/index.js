import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  makeIncrementer = (amount) => () =>
    this.setState((prevState) => ({ count: prevState.count + amount }))

  handleOnIncrementClick = this.makeIncrementer(1)

  handleOnDecrementClick = this.makeIncrementer(-1)

  render() {
    return (
      <div>
        <p>Counter {this.state.count}</p>
        <button className="increment" onClick={this.handleOnIncrementClick}>
          Increment
        </button>
        <button className="decrement" onClick={this.handleOnDecrementClick}>
          Decrement
        </button>
      </div>
    )
  }
}

export default Counter
