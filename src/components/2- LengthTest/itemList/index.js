import React, { Component } from 'react'

class ItemList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countOfItem: [1, 2, 3]
    }
  }

  handleOnIncrementClick = () => {
    this.setState({ countOfItem: [...this.state.countOfItem, 4] })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleOnIncrementClick}>Increment List</button>
        <ul>
          {this.state.countOfItem.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ItemList
