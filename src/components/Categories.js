import React from 'react'
import './style/Categories.scss'
import item1 from './assets/img/item1.jpg'
import item2 from './assets/img/item2.jpg'
import item3 from './assets/img/item3.jpg'
import item4 from './assets/img/item4.jpg'
import item5 from './assets/img/item5.jpg'
import item6 from './assets/img/item6.jpg'
import SubCategories from './subComponents/SubCategories'

function Categories() {
  return (
    <div className='categories'>
      <h1>Shop By <span style={{color:'orange'}}>Rooms</span></h1>
      <div className='items_wrapper'>
                <div className='grid-container'>
                    <SubCategories title={'Chairs'} src={item1} />
                    <SubCategories title={'Tables'} src={item2} />
                    <SubCategories title={'Sofa'} src={item3} />
                    <SubCategories title={'Beds'} src={item4} />
                    <SubCategories title={'Cabinets'} src={item5} />
                    <SubCategories title={'Storage'} src={item6} />
                </div>
            </div>
    </div>
  )
}

export default Categories