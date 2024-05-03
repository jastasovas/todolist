import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ id: number, label: string, completed: boolean }[]>([]);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id!== id));
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {...todo, completed:!todo.completed };
        }
        return todo;
      })
    );
  };

  const handleAdd = (label: string) => {
    setTodos([...todos, { id: todos.length + 1, label, completed: false }]);
  };

  return (
    <div>
      <h1>Todo</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
};

export default App;