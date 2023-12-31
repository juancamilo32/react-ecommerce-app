import React, { useState } from 'react'
import { List } from '../../components'
import { useParams } from 'react-router-dom'
import './Products.css'

const Products = () => {

    const categoryId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);

    return (
        <div className='app-products'>
            <div className='app-products-filters'>
                <div className='app-products-filters-items'>
                    <h2>Filter By Price</h2>
                    <div className='app-products-filters-items-item'>
                        <span>0</span>
                        <input type='range' min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className='app-products-filters-items'>
                    <h2>Sort By</h2>
                    <div className='app-products-filters-items-item'>
                        <input type='radio' id='asc' value='asc' name='price' onChange={e => setSort('asc')} />
                        <label htmlFor='asc'>Price (Lowest First)</label>
                    </div>
                    <div className='app-products-filters-items-item'>
                        <input type='radio' id='desc' value='desc' name='price' onChange={e => setSort('desc')} />
                        <label htmlFor='desc'>Price (Highest First)</label>
                    </div>
                </div>
            </div>
            <div className='app-products-main'>
                <img
                    className="app-products-main-img"
                    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                />
                <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
            </div>
        </div>
    )
}

export default Products