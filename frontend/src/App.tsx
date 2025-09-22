import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home'
import Notes from './pages/notes'
import Login from './pages/login'
import Signup from './pages/signup'
import EditNote from './pages/editNote'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path='home' />
      <Route element={<Notes/>} path='notes' />
      <Route element={<Login/>} path='login'/>
      <Route element={<Signup/>} path='signup'/>
      <Route element={<EditNote/>} path='editNote/:id'/>


    
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
