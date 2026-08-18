import React from 'react'
import Home from './Home'
import Login from './Login'
import './Box.css'
import {Route, Routes, Link} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes className='aa'>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  )
}

export default App
