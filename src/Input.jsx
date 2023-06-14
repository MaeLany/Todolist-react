import React, { useState } from 'react';

const Input = ({ onAddTask }) => {

  const [taskInput, setTaskInput] = useState('');
    const handleAddTask = (e) => {
      e.preventDefault();
      // Lógica para agregar una tarea
      // Utiliza la función onAddTask pasada como prop para comunicarse con el componente padre
      if (taskInput.trim() !== '') {
        onAddTask(taskInput);
        setTaskInput('');
      }
    };
    
    const handleInputChange = (e) => {
      setTaskInput(e.target.value);
    };
  
  
    return (
      <form>
      <input type="text" value={taskInput} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Añadir</button>
    </form>
    );
  };

  export default Input;