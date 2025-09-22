import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home'
import Notes from './pages/notes'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path='home' />
      <Route element={<Notes/>} path='notes' />

    
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
