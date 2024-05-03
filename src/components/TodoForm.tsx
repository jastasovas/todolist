import React, { useState } from 'react';

interface TodoFormProps {
  onAdd: (label: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [label, setLabel] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd(label);
    setLabel('');
  };

  return (
    <div className='card'> <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={label}
        onChange={(event) => setLabel(event.target.value)}
        placeholder="Add Task"
      />
      <button type="submit">Add</button>
    </form></div>
   
  );
};

export default TodoForm;