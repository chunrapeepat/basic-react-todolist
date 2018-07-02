import React, { Component } from 'react'
import List from './components/List'

class App extends Component {
  state = {
    input: '',
    lists: ['absdfasf', 'asdasdasdasd', 'asdasdasdsajoasd'],
  }

  updateInput(e) {
    const value = e.target.value
    this.setState({input: value})
  }

  handleSubmit() {
    console.log('you submit', this.state.input)
    this.setState({input: ''})
  }

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.updateInput.bind(this)} type="text" placeholder="Enter your task..."/>
        <button onClick={this.handleSubmit.bind(this)} type="submit">Submit</button>
        {this.state.lists.map(list => {
          return <List text={list}/>
        })}
      </div>
    )
  }
}

export default App
