import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo, editTodo } from './todoSlice';
import EditModal from './EditModal';

const TodoList = ({ filterText }) => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleEdit = (todo) => {
    setSelectedTodo(todo);
    setModalOpen(true);
  };

  const handleSave = (id, newText) => {
    dispatch(editTodo({ id, text: newText }));
  };

  // Filtrar las tareas basándose en filterText (insensible a mayúsculas)
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li 
            key={todo.id} 
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            <span 
              className="todo-text"
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <div className="todo-buttons">
              <button onClick={() => handleEdit(todo)} className="btn-edit">Editar</button>
              <button onClick={() => dispatch(removeTodo(todo.id))} className="btn-remove">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      {modalOpen && selectedTodo && (
        <EditModal 
          todo={selectedTodo} 
          onSave={handleSave} 
          onClose={() => setModalOpen(false)} 
        />
      )}
    </>
  );
};

export default TodoList;
