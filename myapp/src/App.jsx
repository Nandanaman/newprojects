import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Navbar  from './components/Navbar'
import UserTable from './components/UserTable'
import New from './components/New'
import Listmap from './components/Listmap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <UserTable/> */}
      {/* <New/> */}
      <Listmap/>
    </>
  )
}

export default App
