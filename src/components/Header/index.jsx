import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class Header extends Component {

    addTodo = (event) => {
        if (event.keyCode !== 13) return
        console.log(event.keyCode, event.target.value)
        const todoObj = { id: nanoid(), name: event.target.value, done: false }
        this.props.addTodo(todoObj)
        event.target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.addTodo} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
