import React from 'react'
import Todo from './Todo'

function TodoList(props) {
  return (
    
      props.todos.map(todo => {
        return (
          <Todo key={todo.id} todo={props.todo} />
        )
      })
    

  )
}

export default TodoList