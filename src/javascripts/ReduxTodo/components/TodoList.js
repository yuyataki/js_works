import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  render () {
    const todos = this.props.todos.map((todo, index) =>
      <Todo {...todo}
            key={index}
            onClick={() => this.props.onTodoClick(index)} />
    )
    return (
      <ul>
        {todos}
      </ul>
    )
  }
}
