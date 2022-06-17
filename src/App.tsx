import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './screens/Homepage'
import Header from './components/Header'
import Characters from './screens/Characters'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar />
    </>
  )
}

export default App
