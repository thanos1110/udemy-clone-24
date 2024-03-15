import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../components/Topbar'
function Login() {
  return (
    <>
    <Topbar/>
    <div className='flex'>
      <p className='sec-title'><b>Log in to your Udemy account</b></p>
      <button className='passless'><img src="./google.svg" alt="" /> Continue with Google</button>
      <button className='passless'><img src="./facebook.svg" alt="" /> Continue with Facebook</button>
      <button className='passless'><img src="./apple.svg" alt="" /> Continue with Apple</button>
      <input className='input-box' type="text" placeholder='Email' />
      <input className='input-box' type="password" placeholder='Password' />
      <button className='signup-btn'>Log in</button>
      <p>or <Link to="/forgot" className='sec-title'>Forgot Password</Link></p>
      <hr />
      <p className='sec-title'>Don't have an account? <Link to={'/signup'}> Sign up</Link>
        <br />
        <Link to={'/login-with-organization'}>Log in with your organization</Link></p>
    </div>
    </>
  )
}

export default Login
