import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import AddEmployees from './pages/AddEmployees'
import EditEmployees from './pages/EditEmployees'
import './App.css'

function App() {
  

  return (
    <>
<Header />
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/add"element={<AddEmployees />}/>
  <Route path="/edit/:id"element={<EditEmployees />}/>
</Routes>
    </>
  )
}
export default App
