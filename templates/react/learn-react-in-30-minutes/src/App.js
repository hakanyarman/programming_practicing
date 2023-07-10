import React, { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
  ])
  // useRef html elementine ulaşmamızı sağlar.
  const todoNameRef = useRef()
 
  function handleAddTodo(e) {
      const name = todoNameRef.current.value;
      if(name === "" ) return
        console.log(name)
      
  }
  
  // todos yani birden çok todo tuttuğumuz için initial value olarak useState'e array göndeririz.
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo()}>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do {todos}</div>
    </>
  );
}

export default App;
