import React from 'react'
import './style/Footer.scss'

function Footers() {
  return (
    <div className='footer'>
      <div className='footer_wrapper'>
        <div className='upper'>
          <div className='footer_about'>
            <div className='logo'></div>
            <div>
              <h5>About us</h5>
              <p>Duis Lorem proident dolor veniam. Duis elit officia irure culpa. In minim ex cillum ullamco aliquip dolor proident.</p>
              </div>
          </div>
          <div>
            <h6>Categories</h6>
            <div className='footer_items'>
              <span>About Us : </span>
              <span>About Us : </span>
              <span>About Us : </span>
              <span>About Us : </span>
              <span>About Us : </span>
            </div>
          </div>
          <div>
            <h6>Quick Links</h6>
            <div className='footer_items'>
              <span>About Us : </span>
              <span>About Us : </span>
              <span>About Us : </span>
              <span>About Us : </span>
              <span>About Us : </span>
            </div>
          </div>
          <div>
            <h6>Address</h6>
            <div className='footer_items'>
              <span>About Us : </span>
              <span>About Us : </span>
              <span>About Us : </span>
              <span>About Us : </span>
              <span>About Us : </span>
            </div>
          </div>
        </div>
        <div className='lower'>
          <div>@ Harvin Chairs, All Right Reserved.</div>
          <div className='terms'>
            <span>Terms & Condition</span>
            <span>Privecy & Policy</span>
            <span>Refund Policy</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footers