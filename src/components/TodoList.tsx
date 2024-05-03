import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: { id: number; label: string; completed: boolean }[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggle }) => {
  return (
    <div className='todolist'><ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          label={todo.label}
          completed={todo.completed}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul></div>
    
  );
};

export default TodoList;