import React from 'react'
import { Link } from 'react-router-dom'
function Topbar() {
  return (
    <div className='navbar'>
      <Link className='nav-child' to={'/'}><img src="./logo-udemy.svg" id='logo' alt="" /></Link>
      <div className='nav-child'>Categories</div>
      <input className='nav-child nav-search' type="text" placeholder='Search for anything'/>
      <Link className='nav-child' to={'/plans-prices'}>Plans & Price</Link>
      <Link className='nav-child' to={'/udemy-bussiness'}>Udemy Bussiness</Link>
      <Link className='nav-child' to={'/teacher'}>Teach on Udemy</Link>
      <img src="./cart.gif"  alt="" />
      <Link className='nav-child' to={'/login'}>Log in</Link>
      <Link className='nav-child' to={'/signup'}>Sign up</Link>
      <img src="./globe.gif" className='nav-img' alt="" />
    </div>
  )
}

export default Topbar
