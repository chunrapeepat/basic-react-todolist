import React, { Component } from 'react'
import List from './components/List'

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
  }

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.updateInput.bind(this)} type="text" placeholder="Enter your task..."/>
        <button onClick={this.handleSubmit.bind(this)} type="submit">Submit</button>

        {this.state.lists.map((list, i) => {
          return <List key={i} text={list}/>
        })}
      </div>
    )
  }
}

export default App
