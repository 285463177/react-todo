import React, { Component } from 'react'
import Header from '../Header'
import List from '../List'
import Footer from '../Footer'

export default class Todo extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false }
    ]
  }
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos={todos}/>
          <Footer />
        </div>
      </div>
    )
  }
}
