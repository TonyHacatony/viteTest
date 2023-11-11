import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState<string[]>([])

  return (
    <>
      <h1>Enter number</h1>
      <input className="inp"></input>
      <div className="card">
        <button onClick={() => setList(oldList => [...oldList, "test"])}>
          Send a data
        </button>
        <div className="card2">
          {list.map(item => <li>{item}</li>)}
        </div>
      </div>
    </>
  )
}

export default App
