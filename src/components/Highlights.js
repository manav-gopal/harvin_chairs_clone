import React from 'react'
import './style/Highlights.scss'

function Highlights(props) {
  return (
    <div className='highlights'>
      <div className='img_wrapper'>
        <span className='shape'></span>
        <span className='img' style={{backgroundImage:`url(${props.img})`}}></span>
      </div>
      <div className='content'>
        {props.header}
        {props.para}<br/>
        {props.time}
        <span className='shop'>Shop Now</span>
      </div>
    </div>
  )
}

export default Highlights