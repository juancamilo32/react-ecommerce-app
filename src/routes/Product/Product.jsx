import React from 'react'

import './Product.css'
import { itemsData } from '../../constants/constants'

import { BsCartPlus, BsHeart } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {

    const id = parseInt(useParams().id);
    const data = itemsData.find(item => item.id === id);

    const [selectedImage, setSelectedImage] = React.useState(0);
    const [quantity, setQuantity] = React.useState(1);

    const dispatch = useDispatch();

    return (
        <div className='app-product'>
            {
                console.log(itemsData)
            }
            <div className='app-product-images'>
                <div className='app-product-images-all'>
                    <img src={data.img} alt="" onClick={e => setSelectedImage(0)} />
                    <img src={data.img2} alt="" onClick={e => setSelectedImage(1)} />
                </div>
                <div className='app-product-images-main'>
                    <img src={selectedImage === 0 ? data.img : data.img2} />
                </div>
            </div>
            <div className='app-product-content'>
                <h1>{data.title}</h1>
                <span className='app-product-content-price'>${data.price}</span>
                <p className='app-product-content-description'>{data.desc}</p>
                <div className='app-product-content-quantity'>
                    <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button className='app-product-content-addcart' onClick={() => dispatch(addToCart({
                    id,
                    title: data.title,
                    desc: data.desc,
                    price: data.price,
                    img: data.img,
                    quantity
                }))}>
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