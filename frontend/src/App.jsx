import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './Signup'
import Signin from './Signin'
import Dashboard from './Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
