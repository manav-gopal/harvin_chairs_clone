import React from 'react';
import './style/Items.scss';
import SubItem from './subComponents/SubItem';
import item1 from './assets/img/item1.jpg'
import item2 from './assets/img/item2.jpg'
import item3 from './assets/img/item3.jpg'
import item4 from './assets/img/item4.jpg'
import item5 from './assets/img/item5.jpg'
import item6 from './assets/img/item6.jpg'

function Items() {
    return (
        <div className='items'>
            <div className='items_wrapper'>
                <div className='grid-container'>
                    <SubItem title={'Chairs'} src={item1} />
                    <SubItem title={'Tables'} src={item2} />
                    <SubItem title={'Sofa'} src={item3} />
                    <SubItem title={'Beds'} src={item4} />
                    <SubItem title={'Cabinets'} src={item5} />
                    <SubItem title={'Storage'} src={item6} />
                </div>
            </div>
        </div>
    )
}

export default Items