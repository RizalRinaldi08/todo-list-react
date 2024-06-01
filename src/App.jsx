import React, { useState } from 'react'
import './App.css'
import Todo from './components/Todo'

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
      <Todo todos={todos}/>
    </div>
  )
}

export default App
