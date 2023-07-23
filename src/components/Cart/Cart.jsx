import React from 'react'

import './Cart.css'

import { BsTrash } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'

const Cart = () => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.cart.products)
    const totalPrice = () => {
        let total = 0
        products.map(item => total += item.price * item.quantity)
        return total.toFixed(2)
    }

    return (
        <div className='app-cart'>
            <h1>Products in your cart</h1>
            {products.map(item => (
                <div className='app-cart-item' key={item.id}>
                    <img src={item.img} />
                    <div className='app-cart-item-details'>
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0, 100)}</p>
                        <div className='app-cart-item-details-price'>{item.quantity} x ${item.price}</div>
                    </div>
                    <BsTrash className='app-cart-item-details-delete' fontSize={20} onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}
            <div className='app-cart-total'>
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button className='app-cart-button'>PROCEED TO CHECKOUT</button>
            <span className='app-cart-reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
    )
}

export default Cart