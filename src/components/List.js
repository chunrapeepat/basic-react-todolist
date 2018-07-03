import React from 'react'

class List extends React.Component {
  render() {
    return <li>{this.props.text} <a onClick={() => this.props.remove()}>[x]</a></li>
  }
}

export default List
