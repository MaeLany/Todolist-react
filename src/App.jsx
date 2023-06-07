import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <div class="container mt-5 pt-5">
        <h1>Lista de Tareas</h1>
        <div class="formulario">
          <form>
            <input class="rounded p-2" type="text" name="taskText" placeholder="Agregar tarea..." />
            <button class="rounded p-2 añadirTarea"><i class="bi bi-clipboard2-plus"></i></button>
          </form>
        </div>
        <div class="li-container">
          <ul class="col gap-3">

          </ul>
        </div>
        <div class="empty">
          <p>No tienes tareas pendientes.</p>
        </div>
      </div>
    </>
  )
}




export default App
