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
  addTodo = (todoObj) => {
    const newTodos = [todoObj, ...this.state.todos]
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    )
  }
}
