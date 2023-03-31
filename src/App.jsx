import { useState } from 'react'
import {Game} from './components/Game'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Game />
    </div>
  )
}

export default App
