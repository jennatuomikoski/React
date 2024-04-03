import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function Add() {
    setCount(count + 1);
  }
  function Minus() {
    setCount(count - 1);
  }

  return (
    <>
      <div>
        <button onClick={Minus}>-</button>
        <div>
          <h1>{count}</h1>
        </div>
        <button onClick={Add}>+</button>
      </div>
    </>
  )
}

export default App
