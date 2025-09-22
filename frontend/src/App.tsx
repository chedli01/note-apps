import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path='home' />
    
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
