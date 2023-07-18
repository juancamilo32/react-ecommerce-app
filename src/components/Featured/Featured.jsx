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
            oldPrice: 15,
            price: 12,
        },
        {
            id: 2,
            img: "https://static.dafiti.com.co/p/levis-7837-6303212-1-zoom.jpg",
            img2: "https://static.dafiti.com.co/p/levis-7840-6303212-2-zoom.jpg",
            title: "Light Blue Jean",
            isNew: true,
            oldPrice: 30,
            price: 20,
        },
        {
            id: 3,
            img: "https://static.dafiti.com.co/p/gap-8975-2188702-1-zoom.jpg",
            img2: "https://static.dafiti.com.co/p/gap-8975-2188702-2-zoom.jpg",
            title: "Gray Jogger",
            oldPrice: 25,
            price: 22,
        },
        {
            id: 4,
            img: "https://static.dafiti.com.co/p/mp-8126-3376312-1-zoom.jpg",
            img2: "https://static.dafiti.com.co/p/mp-8128-3376312-2-zoom.jpg",
            title: "Blue Blouse",
            oldPrice: 20,
            price: 12,
        },
        {
            id: 5,
            img: "https://static.dafiti.com.co/p/lacoste-3058-4976902-1-zoom.jpg",
            img2: "https://static.dafiti.com.co/p/lacoste-3060-4976902-2-zoom.jpg",
            title: "Blue Shoes",
            oldPrice: 30,
            price: 25,
        },
        {
            id: 6,
            img: "https://static.dafiti.com.co/p/via-uno-4826-1539902-1-zoom.jpg",
            img2: "https://static.dafiti.com.co/p/via-uno-4827-1539902-2-zoom.jpg",
            title: "Pink Heels",
            oldPrice: 35,
            price: 30,
        },
        {
            id: 7,
            img: "https://static.dafiti.com.co/p/tommy-hilfiger-3734-2600531-1-zoom.jpg",
            img2: "https://static.dafiti.com.co/p/tommy-hilfiger-4036-2600531-2-zoom.jpg",
            title: "Brown Wallet",
            oldPrice: 30,
            price: 25,
        },
        {
            id: 8,
            img: "https://static.dafiti.com.co/p/kenneth-cole-0455-4127771-1-zoom.jpg",
            img2: "https://static.dafiti.com.co/p/kenneth-cole-0459-4127771-2-zoom.jpg",
            title: "Golden Purse",
            oldPrice: 50,
            price: 40,
        }
    ]

    const generateCards = (type) => {
        const objArray = []
        for (let i = 0; i < 4; i++) {
            if (type == "featured") {
                objArray.push(<Card item={data[i]} key={data[i].id} />)
            } else {
                objArray.push(<Card item={data[data.length - i - 1]} key={data[data.length - i - 1].id} />)
            }
        }
        return objArray
    }

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
                    generateCards(type)
                }
            </div>
        </div>
    )
}

export default Featured