import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home'
import Notes from './pages/notes'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path='home' />
      <Route element={<Notes/>} path='notes' />
      <Route element={<Login/>} path='login'/>
      <Route element={<Signup/>} path='signup'/>

    
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
