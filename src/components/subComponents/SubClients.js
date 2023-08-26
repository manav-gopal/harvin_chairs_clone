import React from 'react'
import '../style/SubClients.scss'

function SubClients(props) {
  return (
    <div className='subClients' style={{backgroundColor:props.color}}>
        <div className='left'>
            <span>{props.svg}</span>
        </div>
        <div className='right'>
            <h5>{props.name}</h5>
            <p>{props.quotes}</p>
        </div>
    </div>
  )
}

export default SubClients