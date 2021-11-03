import React, { useState } from 'react'

export default function TodoForm({ onAddTodo }) {
  const [todo, setTodo] = useState('');
  return (
    <form onSubmit={ (event) => {
      event.preventDefault();
      onAddTodo(todo);
      setTodo(``);
    } }>
      <input
        type="text"
        value={ todo }
        onChange={ ({ target: { value } }) => setTodo(value) }
      />
      <button type="submit">Add</button>
    </form>
  )
}
