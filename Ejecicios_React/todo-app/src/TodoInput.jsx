import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input 
        type="text" 
        placeholder="Añade una tarea" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input-todo"
      />
      <button type="submit" className="btn-add">Agregar</button>
    </form>
  );
};

export default TodoInput;
