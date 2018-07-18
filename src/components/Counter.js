import React from 'react'
import styled from 'styled-components'

import {connect} from 'react-redux'

const Heading = styled.h1`
  color: ${props => (props.color) ? props.color : 'red'};
  font-size: 50px;
  margin: 0;
`

class List extends React.Component {
  render() {
    return <Heading>Counter: {this.props.counter}</Heading>
  }
}

const mapStateToProps = state => {
  return {
    counter: state,
  }
}

export default connect(mapStateToProps, null)(List)
