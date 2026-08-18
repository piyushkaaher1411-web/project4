import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    let a=useNavigate()
  return (
    <div className='B'>
    <div className='b'> Login Id=
      <input type='text' placeholder='login ID'></input><br></br><br></br>
      Password=
      <input type='password' placeholder='Enter your password'></input><br></br><br></br>
      <button onClick={()=>a('/')}>Login</button>
    </div>
    </div>
  )
}

export default Login
