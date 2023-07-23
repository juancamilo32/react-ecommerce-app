import React from 'react'

import './Product.css'
import { itemsData } from '../../constants/constants'

import { BsCartPlus, BsHeart } from "react-icons/bs";
import { useParams } from 'react-router-dom';

const Product = () => {

    const id = useParams().id;

    const [selectedImage, setSelectedImage] = React.useState(0);
    const [quantity, setQuantity] = React.useState(1);

    return (
        <div className='app-product'>
            <div className='app-product-images'>
                <div className='app-product-images-all'>
                    <img src={itemsData[id - 1].img} alt="" onClick={e => setSelectedImage(0)} />
                    <img src={itemsData[id - 1].img2} alt="" onClick={e => setSelectedImage(1)} />
                </div>
                <div className='app-product-images-main'>
                    <img src={selectedImage === 0 ? itemsData[id - 1].img : itemsData[id - 1].img2} />
                </div>
            </div>
            <div className='app-product-content'>
                <h1>{itemsData[id - 1].title}</h1>
                <span className='app-product-content-price'>${itemsData[id - 1].price}</span>
                <p className='app-product-content-description'>{itemsData[id - 1].desc}</p>
                <div className='app-product-content-quantity'>
                    <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button className='app-product-content-addcart'>
                    <BsCartPlus fontSize={20} />ADD TO CART
                </button>
                <div className='app-product-content-addwish'>
                    <BsHeart fontSize={20} />ADD TO WISHLIST
                </div>
                <div className="app-product-content-info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr className='app-product-content-divider' />
                <div className="app-product-content-info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}

export default Product