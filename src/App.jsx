import React, { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: 'Finish Progate React Course',
    completed: false
  },
  {
    id: 2,
    title: 'Have lunc with you',
    completed: false
  },
  {
    id: 3,
    title: 'Go to gym',
    completed: false
  }])

  console.log(todos)

  return (
    <div className='App'> 
      <h1>My To-Do List</h1>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>
      })}
    </div>
  )
}

export default App
