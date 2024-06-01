/* eslint-disable react/prop-types */
// import React from 'react'

import TodoItem from "./TodoItem"

// eslint-disable-next-line react/prop-types
const Todo = ({ todos }) => {
    return (
        <div>
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />
            })}
        </div>
    )
}

export default Todo