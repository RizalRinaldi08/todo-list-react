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
    <div style={styles.container}> 
      <h1 style={styles.title}>My To-Do List</h1>
      <Todo todos={todos}/>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px'
  },
  title: {
    fontSize: '36px'
  }
}

export default App
