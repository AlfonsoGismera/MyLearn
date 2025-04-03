import React from 'react';

const TodoFilter = ({ filterText, setFilterText }) => {
  return (
    <div className="todo-filter">
      <input 
        type="text" 
        placeholder="Filtrar tareas..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="filter-input"
      />
    </div>
  );
};

export default TodoFilter;
