import React from 'react'

import './Featured.css'

import Card from '../Card/Card'

const Featured = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "https://static.dafiti.com.co/p/gap-7416-9809981-1-zoom.jpg",
            img2: "https://static.dafiti.com.co/p/gap-7418-9809981-2-zoom.jpg",
            title: "Black T—shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://static.dafiti.com.co/p/levis-7837-6303212-1-zoom.jpg",
            img2: "https://static.dafiti.com.co/p/levis-7840-6303212-2-zoom.jpg",
            title: "Light Blue Jean",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://static.dafiti.com.co/p/gap-8975-2188702-1-zoom.jpg",
            img2: "https://static.dafiti.com.co/p/gap-8975-2188702-2-zoom.jpg",
            title: "Gray Jogger",
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://static.dafiti.com.co/p/mp-8126-3376312-1-zoom.jpg",
            img2: "https://static.dafiti.com.co/p/mp-8128-3376312-2-zoom.jpg",
            title: "Blue Blouse",
            oldPrice: 19,
            price: 12,
        }
    ]

    return (
        <div className='app-featured'>
            <div className='app-featured-text'>
                <h1 className='app-featured-text-title'>{type} products</h1>
                <p className='app-featured-text-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
            </div>
            <div className='app-featured-items'>
                {
                    data.map(item => (
                        <Card item={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Featured