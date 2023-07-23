import React from 'react'

import './Card.css'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../../constants/constants'

const Card = ({ item }) => {

    return (
        <Link className='card-link' to={`/product/${item.id}`} onClick={scrollToTop}>
            <div className='app-card'>
                <div className='app-card-image'>
                    {item.isNew ? <span className='app-card-image-new'>New Season</span> : null}
                    <img src={item.img} className='app-card-image-mainImg' />
                    <img src={item.img2} className='app-card-image-secondImg' />
                </div>
                <h2 className='app-card-title'>{item.title}</h2>
                <div className='app-card-prices'>
                    <h3>${item.oldPrice}</h3>
                    <h3>${item.price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card