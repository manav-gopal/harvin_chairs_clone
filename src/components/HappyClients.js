import React from 'react'
import './style/HappyClients.scss'
import SubClients from './subComponents/SubClients'

function HappyClients() {
  const svg = (<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>);
  return (
    <div className='happy_clients'>
      <div className='clients_wrapper'>
        <h2 className='title'>Happy Clients</h2>
        <div className='row1'>
          <SubClients quotes={`~ "Such amazing quality! we also bought the mattress sheet and have nothing bad to say!!"`} name={'User Name'} svg={svg} color={'#FFEED4'} />
          <SubClients quotes={`~ "Such amazing quality! we also bought the mattress sheet and have nothing bad to say!!"`} name={'User Name'} svg={svg} color={'#CDEABE'} />
          <SubClients quotes={`~ "Such amazing quality! we also bought the mattress sheet and have nothing bad to say!!"`} name={'User Name'} svg={svg} color={'#C9F0FF'} />
          <SubClients quotes={`~ "Such amazing quality! we also bought the mattress sheet and have nothing bad to say!!"`} name={'User Name'} svg={svg} color={'#F3F1F4'} />
        </div>
        <div className='row2'>
          <SubClients quotes={`~ "Such amazing quality! we also bought the mattress sheet and have nothing bad to say!!"`} name={'User Name'} svg={svg} color={'#EFDBEC'} />
          <SubClients quotes={`~ "Such amazing quality! we also bought the mattress sheet and have nothing bad to say!!"`} name={'User Name'} svg={svg} color={'#F3F1F4'} />
          <SubClients quotes={`~ "Such amazing quality! we also bought the mattress sheet and have nothing bad to say!!"`} name={'User Name'} svg={svg} color={'#FFD1BE'} />
          <SubClients quotes={`~ "Such amazing quality! we also bought the mattress sheet and have nothing bad to say!!"`} name={'User Name'} svg={svg} color={'#CDEABE'} />
        </div>
      </div>
    </div>
  )
}

export default HappyClients