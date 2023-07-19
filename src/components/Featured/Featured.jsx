import React from 'react'

import './Featured.css'

import Card from '../Card/Card'
import { itemsData } from '../../constants/constants'

const Featured = ({ type }) => {


    const generateCards = (type) => {
        const objArray = []
        for (let i = 0; i < 4; i++) {
            if (type == "featured") {
                objArray.push(<Card item={itemsData[i]} key={itemsData[i].id} />)
            } else {
                objArray.push(<Card item={itemsData[itemsData.length - i - 1]} key={itemsData[itemsData.length - i - 1].id} />)
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