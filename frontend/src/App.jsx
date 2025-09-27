import { Routes, Route } from 'react-router-dom'


import './App.css'
import PersonList from './pages/PersonList'
import Home from './pages/Home'

function App() {
  

  return (
    <div >
      <Routes>
        <Route path='/profissional' element={<PersonList/>}/>
        <Route path='/' element={<Home/>}/>        
      </Routes>
    </div>
  )
}

export default App
