import React from 'react'

import { Link } from "react-router-dom";

import './Navbar.css'

import { logo } from '../../assets'
import { BsSearch, BsPerson, BsCart } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [toggleCart, setToggleCart] = React.useState(false);
    const products = useSelector(state => state.cart.products);

    return (
        <div>
            <div className='app-navbar'>
                <div className='app-navbar-logo'>
                    <Link to="/"><img src={logo} /></Link>
                </div>
                <div className='app-navbar-categories'>
                    <Link className="link" to="/products/1">Women</Link>
                    <Link className="link" to="/products/2">Men</Link>
                    <Link className="link" to="/products/3">Kids</Link>
                </div>
                <div className='app-navbar-buttons'>
                    <BsSearch size={20} className='icon icon-search' />
                    <BsPerson size={24} className='icon icon-profile' />
                    <div className='app-navbar-buttons-cart' onClick={() => setToggleCart(prev => !prev)}>
                        <BsCart size={20} className='icon' />
                        <span className='app-navbar-buttos-cart-bubble'>{products.length}</span>
                    </div>
                    <div className='app-navbar-smallscreen'>
                        <GiHamburgerMenu color='black' fontSize={20} onClick={() => setToggleMenu(true)} />
                        {
                            toggleMenu ?
                                <div className='navbar-smallscreen-overlay slide-bottom'>
                                    <IoCloseSharp fontSize={25} className='navbar-smallscreen-overlay-close' onClick={() => setToggleMenu(false)} />
                                    <div className='app-navbar-smallscreen-items'>
                                        <Link className="link" to="/products/1" onClick={() => setToggleMenu(false)}>Women</Link>
                                        <Link className="link" to="/products/2" onClick={() => setToggleMenu(false)}>Men</Link>
                                        <Link className="link" to="/products/3" onClick={() => setToggleMenu(false)}>Kids</Link>
                                    </div>
                                </div> :
                                null
                        }
                    </div>
                </div>
            </div>
            {toggleCart ? <Cart /> : null}
        </div>
    )
}

export default Navbar