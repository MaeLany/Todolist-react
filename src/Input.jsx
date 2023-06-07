import React from 'react';

const Input = ({ onAddTask }) => {
    const handleAddTask = (e) => {
      e.preventDefault();
      // Lógica para agregar una tarea
      // Utiliza la función onAddTask pasada como prop para comunicarse con el componente padre
    };
  
    return (
      <form>
        <input type="text" />
        <button onClick={handleAddTask}>Add</button>
      </form>
    );
  };

  export default Input;