import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './App.css';
import { Button,createTheme, ThemeProvider } from '@mui/material';


interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}




const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: 'black',
          borderColor: 'transparent',
          '&:hover': {
            borderColor:'#ECDFDE',
            color: 'gray',
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
});



const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: 'Тестовое задание', completed: false },
    { id: 2, text: 'Прекрасный код', completed: true },
    { id: 3, text: 'Покрытие тестами', completed: false }
  ]);

  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const handleAddTodo = (text: string) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter(todo => !todo.completed).length;

  return (
<ThemeProvider theme={theme}>
<div className="app-container">
      <h1 className="header">todos</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={filteredTodos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteCompleted}/>
      <div className="footer">
        <div className="filters">
        <span>{activeCount} items left</span>
          <Button variant="outlined" onClick={() => setFilter('all')}>All</Button>
          <Button variant="outlined" onClick={() => setFilter('active')}>Active</Button>
          <Button variant="outlined" onClick={() => setFilter('completed')}>Completed</Button>
        </div>
        <Button variant="outlined" onClick={handleDeleteCompleted}>Clear completed</Button>
      </div>
    </div>
</ThemeProvider>
  );
};

export default App;