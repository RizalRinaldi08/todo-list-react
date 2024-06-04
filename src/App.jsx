import React, { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

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

  // console.log(todos)
  const toggleCompleted = (todoId) => {
    const updateTodos = todos.map((todo) => {
      if(todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updateTodos)
  }
  const deleteTodo = (todoId) => {
    const updateTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(updateTodos)
  }

  const addTodo = (todoTitle) => {
    if(todoTitle === ''){
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false
    }

    const updateTodos = todos.concat(newTodo)
    setTodos(updateTodos)
  }



  return (
    <div style={styles.container}> 
      <h1 style={styles.title}>My To-Do List</h1>
      <TodoForm addTodo={addTodo}/>
      <Todo todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
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
