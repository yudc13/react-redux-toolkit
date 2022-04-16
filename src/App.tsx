import React, { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { useAppDispatch } from './store'
import { addTodo, selectTodos } from './store/todosSlice'

function App() {
  const [desc, setDesc] = useState('')
  const todos = useSelector(selectTodos)
  const dispatch = useAppDispatch()
  console.log(todos)
  const handleCreateTodo = (e:  React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(addTodo({ id: Date.now(), isCompleted: false, desc }))
    setDesc('')
  }
  return (
    <div className="App">
      <div className="counter">Todos Updated Counter: 30</div>
      <header className="header">
        <h1 className="title">Todo：Redux Toolkit</h1>
        <form>
          <label>Add new: </label>
          <input value={desc} onChange={evt => setDesc(evt.target.value)} />
          <button onClick={handleCreateTodo}>Create</button>
        </form>
      </header>
      <main className="container">
        <section className="selection">
          <h2>My Todos:</h2>
          <div className="todos">
            {
              todos.map((todo, index) => <p key={todo.id} className={`todo, ${todo.isCompleted ? 'completed' : ''}`}>
                {index + 1}) <span className="desc">{todo.desc}</span>
              </p>)
            }
          </div>
        </section>
        <section className="selection">
          <h2>Selected Todo:</h2>
        </section>
      </main>
    </div>
  )
}

export default App
