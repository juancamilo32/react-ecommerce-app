import React from 'react'

import { Link } from "react-router-dom";

import './Footer.css'
import { payment, logo } from '../../assets';

const Footer = () => {
    return (
        <div className='app-footer'>
            <div className='app-footer-top'>
                <div className='app-footer-top-list'>
                    <h3>Products</h3>
                    <Link className="link footer-link" to="/products/1">Women</Link>
                    <Link className="link footer-link" to="/products/2">Men</Link>
                    <Link className="link footer-link" to="/products/3">Kids</Link>
                </div>
                <div className='app-footer-top-list'>
                    <h3>Chogo's</h3>
                    <Link className="link footer-link" to="/">About Us</Link>
                    <Link className="link footer-link" to="/">FAQ</Link>
                    <Link className="link footer-link" to="/">Contact</Link>
                </div>
                <div className='app-footer-top-about'>
                    <h3>About</h3>
                    <p className='footer-p'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
                        amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
                        ut labore etdolore.
                    </p>
                </div>
                <div className='app-footer-top-mission'>
                    <h3>Mission</h3>
                    <p className='footer-p'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
                        amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
                        ut labore etdolore.
                    </p>
                </div>
            </div>
            <div className='app-footer-bottom'>
                <div className='app-footer-bottom-text'>
                    <img src={logo} />
                    <p>© Copyright 2023. All Rights Reserved</p>
                </div>
                <img src={payment} className='footer-payment' />
            </div>
        </div>
    )
}

export default Footer