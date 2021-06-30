import React, { Component } from 'react'

class User extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: { name: '' }
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const user = await res.json()
      this.setState({ user })
    } catch {
      console.log('error occured')
    }
  }
  render() {
    const { user } = this.state
    return (
      <div>
        {user.name ? (
          <p className="user">User:{user.name}</p>
        ) : (
          <span className="spinner">Spinner</span>
        )}
      </div>
    )
  }
}

export default User
