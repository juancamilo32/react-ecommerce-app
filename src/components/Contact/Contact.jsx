import React from 'react'

import './Contact.css'

import { BsFacebook, BsInstagram, BsTwitter, BsGoogle, BsPinterest } from "react-icons/bs";

const Contact = () => {
    return (
        <div className='app-contact'>
            <div className='app-contact-wrapper'>
                <h3>BE IN TOUCH WITH US:</h3>
                <div className='app-contact-wrapper-email'>
                    <input type='text' placeholder='Enter your email' />
                    <button>JOIN US</button>
                </div>
                <div className='app-contact-wrapper-icons'>
                    <BsFacebook fontSize={20} className='icon' />
                    <BsInstagram fontSize={20} className='icon' />
                    <BsTwitter fontSize={20} className='icon' />
                    <BsGoogle fontSize={20} className='icon' />
                    <BsPinterest fontSize={20} className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Contact