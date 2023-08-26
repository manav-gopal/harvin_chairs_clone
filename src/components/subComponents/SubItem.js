import React from 'react'
import '../style/SubItem.scss'

function SubItem(props) {
    const style = {
        backgroundImage: `url(${props.src})`
    };
    return (
        <div className='subItem'>
            <div className='box'>
                <span>
                    <h1>{props.title}</h1><br />
                    <p>154 Products</p>
                </span>
            </div>
            <div className='img_wrapper'>
                <div className='img' style={style}></div>
            </div>
        </div>
    )
}

export default SubItem