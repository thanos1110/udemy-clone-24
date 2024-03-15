import React from 'react'
import {Link} from 'react-router-dom'
import Topbar from '../components/Topbar'
function Signup() {
  return (
    <>
    <Topbar/>
    <div className='flex signup'>
      <p><b>Sign up and start learning</b></p>

      <input className='input-box' type="text" placeholder='Fullname' required />
      <input className='input-box' type="email" placeholder='Email' required/>
      <input className='input-box' type="password" placeholder='Password' required/>
      <span className='pass'></span>
      <span className='pass'></span>
      <span className='pass'></span>
      <span className='pass'></span>

      <p><input type="checkbox"/>Send me special offers, Personalized <br />recommendations, and learning tips</p>
      <button className='signup-btn'>Sign up</button>
      <p>By signing up, you agree to our <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>.</p>
      <hr />
      <p>Already have an account? <Link to="/login">Log in</Link></p>
    </div>
    </>
  )
}

export default Signup
