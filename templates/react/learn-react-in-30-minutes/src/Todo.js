import React from 'react'

function Todo(props) {
  return (
    <label>
        <input type='checkbox' checked={props.todo.complete} />
        {props.todo.name}
    </label>
    
  )
}

export default Todo