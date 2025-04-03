import React, { useState } from 'react';

const EditModal = ({ todo, onSave, onClose }) => {
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    onSave(todo.id, text);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Editar Tarea</h2>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          className="modal-input"
        />
        <div className="modal-buttons">
          <button onClick={handleSave} className="btn-save">Guardar</button>
          <button onClick={onClose} className="btn-cancel">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
