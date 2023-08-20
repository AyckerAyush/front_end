import React from 'react'
import Board from "./components/board/Board"
import "./App.css"
function repl(){
  return <h1>raj</h1>
}
const App = () => {
  // <Board />
  // let a=repl();
  return (
    <>
    <body>
    <nav>Dipsplay</nav>
    <div>
      <Board />
      {/* {a} */}
    </div>
    </body>
    </>
  )
}

export default App