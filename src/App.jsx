import React, { useState } from 'react';
import Input from './Input';
import TaskList from './TaskList';
import './App.css' //css

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <Input onAddTask={handleAddTask} setTaskInput={setTaskInput} taskInput={taskInput} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
