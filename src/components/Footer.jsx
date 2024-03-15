import React from 'react'

function Footer() {
  return (
    <footer  className='footer'>
      <div>
        <p className='foot-title'>Top companies choose Udemy Business to build in-demand career skills.
         <b className='companies'> Nasdaq</b> <b className='companies'>Volkswagen</b> <b className='companies'>BoxNet App</b> <b className='companies'>Eventbrite</b></p>
      </div>
      <div className='flexy'>
        <div className='flex-item'>
          Udemy Business <br />
          Teach on Udemy <br />
          Get the app <br />
          About us <br />
          Contact us <br />
        </div>
        <div className='flex-item'>
          Careers <br />
          Blog <br />
          Help and Support <br />
          Affiliate <br />
          Investors <br />
        </div>
        <div className='flex-item'>
          Terms <br />
          Privacy policy <br />
          Sitemap <br />
          Accessibility statement <br />
        </div>
      </div>
      <div  className='footimg'>
      <img src="./logo-udemy-inverted.svg" id='logo' alt="" />
      <p>&copy;2024</p>
      </div>
    </footer>
  )
}

export default Footer
