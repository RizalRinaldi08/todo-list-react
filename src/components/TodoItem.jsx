/* eslint-disable react/prop-types */
// import React from 'react'

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
    const getTodoTitleStyle = () => {
        if(todo.completed === true) {
            return { textDecoration: 'line-through' }
        } else {
            return { textDecoration: 'none'}
        }
    }
    return (
        <div style={styles.todoItem}>
            <input 
                type="checkbox" 
                style={styles.checkBox} 
                onChange={() => toggleCompleted(todo.id)} />
            <p style={getTodoTitleStyle()}>{todo.title}</p>
            <button style={styles.button} onClick={() => deleteTodo(todo.id)}>x</button>
        </div>
    )
}

const styles = {
    todoItem: {
        border: '2px solid #f4f4f4',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    checkBox: {
        marginRight: '10px',
        height: '18px',
        width: '18px'
    },
    button: {
        backgroundColor: '#BB0000',
        color: '#fff',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    }
}

export default TodoItem