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

  remove(index) {
    const newList = this.state.lists.filter((_, i) => {
      if (i === index) return false
      return true
    })
    this.setState({lists: newList})
  }

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.updateInput.bind(this)} type="text" placeholder="Enter your task..."/>
        <button onClick={this.handleSubmit.bind(this)} type="submit">Submit</button>

        {this.state.lists.map((list, i) => {
          return <List key={i} remove={() => this.remove(i)} text={list}/>
        })}
      </div>
    )
  }
}

export default App
