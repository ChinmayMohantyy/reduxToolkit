import { useState } from 'react'
import './App.css'
import AddTodo from './Component/AddTodo'
import Todos from './Component/Todos'

function App() {

  return (
    <>
      <h1>Create a TodoApp Using ReduxToolKit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
