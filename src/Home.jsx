import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    let b=useNavigate()
  return (
    <div className='c'>
      <button onClick={()=>b('/login')}>Log out</button>
      <div className='cc'>Home 
    </div>
    </div>
  )
}

export default Home
