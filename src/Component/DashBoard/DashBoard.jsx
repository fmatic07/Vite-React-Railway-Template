import { useState } from 'react'
import './DashBoard.css'

function DashBoard() {
  const [count, setCount] = useState(0)

  return (
    <div className="DashBoard">
      <header className="DashBoard-header">
        <p>Hello world I'm a Headless Driver</p>
        <p>
          Edit <code>DashBoard.jsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  )
}

export default DashBoard
