import React from 'react'

import './Product.css'
import { itemsData } from '../../constants/constants'

import { BsCartPlus, BsHeart } from "react-icons/bs";

const Product = () => {

    const [selectedImage, setSelectedImage] = React.useState(0);
    const [quantity, setQuantity] = React.useState(1);

    return (
        <div className='app-product'>
            <div className='app-product-images'>
                <div className='app-product-images-all'>
                    <img src={itemsData[0].img} alt="" onClick={e => setSelectedImage(0)} />
                    <img src={itemsData[0].img2} alt="" onClick={e => setSelectedImage(1)} />
                </div>
                <div className='app-product-images-main'>
                    <img src={selectedImage === 0 ? itemsData[0].img : itemsData[0].img2} />
                </div>
            </div>
            <div className='app-product-content'>
                <h1>Title</h1>
                <span className='app-product-content-price'>$199</span>
                <p className='app-product-content-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
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