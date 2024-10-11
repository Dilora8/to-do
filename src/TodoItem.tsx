// TodoItem.tsx
import { Button } from '@mui/material';
import React from 'react';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void; // Добавляем onDelete
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle, onDelete }) => {
  return (
    <li className="todo-item">
      <label className="custom-checkbox">
        <input type="checkbox" checked={completed} onChange={onToggle} />
        <span className="checkmark"></span>
      </label>
      <span className={`todo-text ${completed ? 'completed' : ''}`}>{text}</span>
      <Button onClick={onDelete}>X</Button> {/* Кнопка удаления */}
    </li>
  );
};

export default TodoItem;