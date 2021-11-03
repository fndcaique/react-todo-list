import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <TodoForm onAddTodo={ handleAddTodo } />
      <TodoList todos={ todos } />
    </div>
  );
}

export default App;
