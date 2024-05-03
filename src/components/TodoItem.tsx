import React from 'react';

interface TodoItemProps {
  id: number;
  label: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  label,
  completed,
  onDelete,
  onToggle,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span style={{ textDecoration: completed? 'line-through' : 'none', opacity: completed? '0.5': '1', color: completed? 'red': 'black'}}>
        {label}
      </span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;