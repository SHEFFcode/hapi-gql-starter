import React, { Component } from 'react'

class Mainpage extends Component {
  render() {
    const { hello } = this.props.data

    return <div>{hello}</div>
  }
}

export default Mainpage
