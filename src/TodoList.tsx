// TodoList.tsx
import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: { id: number; text: string; completed: boolean }[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void; // Добавляем обработчик удаления
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleTodo, onDeleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          onToggle={() => onToggleTodo(todo.id)}
          onDelete={() => onDeleteTodo(todo.id)} // Передаем функцию удаления
        />
      ))}
    </ul>
  );
};

export default TodoList;