import React from 'react'

import './Cart.css'

import { itemsData } from '../../constants/constants'

import { BsTrash } from "react-icons/bs"

const Cart = () => {

    const testData = itemsData.slice(0, 2);
    console.log(testData)

    return (
        <div className='app-cart'>
            <h1>Products in your cart</h1>
            {testData.map(item => (
                <div className='app-cart-item' key={item.id}>
                    <img src={item.img} />
                    <div className='app-cart-item-details'>
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0, 100)}</p>
                        <div className='app-cart-item-details-price'>1 x ${item.price}</div>
                    </div>
                    <BsTrash className='app-cart-item-details-delete' fontSize={20} />
                </div>
            ))}
            <div className='app-cart-total'>
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button className='app-cart-button'>PROCEED TO CHECKOUT</button>
            <span className='app-cart-reset'>Reset Cart</span>
        </div>
    )
}

export default Cart