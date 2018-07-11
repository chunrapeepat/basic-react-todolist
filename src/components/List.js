import React from 'react'

class List extends React.Component {
  state = {
    clicked: false,
  }
  render() {
    return <li style={{color: !this.state.clicked ? 'black' : 'red'}}
            onClick={() => this.setState({clicked: !this.state.clicked})}>
              {this.props.text} <a onClick={() => this.props.remove()}>[x]</a>
           </li>
  }
}

export default List
