import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Todo：Redux Toolkit</h1>
        <form>
          <label>Add new: </label>
          <input />
          <button>Create</button>
        </form>
      </header>
      <main className="container">
        <section className="selection">
          <h2>My Todos:</h2>
          <div className="todos">
            <p className="todo completed">1) <span className="desc">learn React</span></p>
            <p className="todo">2) <span className="desc">learn Redux</span></p>
            <p className="todo selected">3) <span className="desc">learn Redux-Toolkit</span></p>
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
