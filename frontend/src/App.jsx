import { Routes, Route } from 'react-router-dom'


import './App.css'
import PersonList from './pages/PersonList'
import Home from './pages/Home'
import Select_components from './select_components'

function App() {
  

  return (
    <div >
      <Routes>
        <Route path='/profissional' element={<PersonList/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/component'  element={<Select_components/>} />
      </Routes>
    </div>
  )
}

export default App
