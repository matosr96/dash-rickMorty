import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './screens/Homepage'
import Header from './components/Header'
import Characters from './screens/Characters'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/home' element={<Homepage />}></Route>
      <Route path='/characters' element={<Characters />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
