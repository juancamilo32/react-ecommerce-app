import React from 'react'

import './Categories.css'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../../constants/constants'

const Categories = () => {
    return (
        <div className='app-categories'>
            <div className='app-categories-col'>
                <div className='app-categories-row'>
                    <img
                        src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <Link className="link" to="/products/3" onClick={scrollToTop}>
                        <button>
                            Sale
                        </button>
                    </Link>
                </div>
                <div className='app-categories-row'>
                    <img
                        src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <Link to="/products/1" className="link" onClick={scrollToTop}>
                        <button>
                            Women
                        </button>
                    </Link>
                </div>
            </div>
            <div className='app-categories-col'>
                <div className='app-categories-row'>
                    <img
                        src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <Link to="/products/3" className="link" onClick={scrollToTop}>
                        <button>
                            New Season
                        </button>
                    </Link>
                </div>
            </div>
            <div className='app-categories-col col-large'>
                <div className='app-categories-row'>
                    <div className='app-categories-col'>
                        <div className='app-categories-row gap10'>
                            <img
                                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <Link to="/products/2" className="link" onClick={scrollToTop}>
                                <button>
                                    Men
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='app-categories-col'>
                        <div className='app-categories-row'>
                            <img
                                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <Link to="/products/3" className="link" onClick={scrollToTop}>
                                <button>
                                    Accessories
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='app-categories-row'>
                    <img
                        src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <Link to="/products/3" className="link" onClick={scrollToTop}>
                        <button>
                            Shoes
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Categories