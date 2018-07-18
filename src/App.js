import React, { Component } from 'react'
import List from './components/List'

import styled from 'styled-components'
import {connect} from 'react-redux'

const Heading = styled.h1`
  color: ${props => (props.color) ? props.color : 'red'};
  font-size: 50px;
  margin: 0;
`

class App extends Component {
  state = {
    input: '',
    lists: [],
  }

  updateInput(e) {
    const value = e.target.value
    this.setState({input: value})
  }

  handleSubmit() {
    this.setState({input: '', lists: [...this.state.lists, this.state.input]})
    // send action to reducer
    this.props.dispatch({type: 'INCREMENT_COUNTER_BY_ONE'})
  }

  remove(index) {
    const newList = this.state.lists.filter((_, i) => {
      if (i === index) return false
      return true
    })
    this.setState({lists: newList})
    // send action to reducer
    this.props.dispatch({type: 'DECREMENT_COUNTER_BY_ONE'})
  }

  render() {
    return (
      <div>
        <Heading color="green">Chun Rapeepat</Heading>
        <input value={this.state.input} onChange={this.updateInput.bind(this)} type="text" placeholder="Enter your task..."/>
        <button onClick={this.handleSubmit.bind(this)} type="submit">Submit</button>

        {this.state.lists.map((list, i) => {
          return <List key={i} remove={() => this.remove(i)} text={list}/>
        })}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  }
}

export default connect(null, mapDispatchToProps)(App)
