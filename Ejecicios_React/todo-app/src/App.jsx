import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import { useState } from 'react';
import './App.css';


function App() {
  const [filterText, setFilterText] = useState('');

  return (
    <div className="App">
      <h1>Todo List con React y Redux</h1>
      <TodoInput />
      <TodoFilter filterText={filterText} setFilterText={setFilterText} />
      <TodoList filterText={filterText} />
    </div>
  );
}

export default App;