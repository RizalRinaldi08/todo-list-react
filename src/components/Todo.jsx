/* eslint-disable react/prop-types */
// import React from 'react'

import TodoItem from "./TodoItem"

// eslint-disable-next-line react/prop-types
const Todo = ({ todos, toggleCompleted }) => {
    return (
        <div style={styles.container}>
            {todos.map((todo) => {
                return <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            toggleCompleted={toggleCompleted}
                        />
            })}
        </div>
    )
}

const styles ={
    container: { width: '40%', margin: '0 auto' }
}

export default Todo