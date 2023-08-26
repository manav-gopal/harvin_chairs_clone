import React from 'react'
import '../style/SubCategories.scss'

function SubCategories(props) {
    const style = {
        backgroundImage: `url(${props.src})`
    };
    return (
        <div className='subCategories'>
            <div className='img_wrapper'>
                <div className='img' style={style}>
                <p>154 Products</p>
                </div>
            </div>
            <div className='box'>
                <span>
                    <h1>{props.title}</h1><br />
                </span>
            </div>
        </div>
    )
}

export default SubCategories