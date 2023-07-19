import React from 'react'

import './List.css'

import { itemsData } from '../../constants/constants'

import Card from '../Card/Card'

const List = () => {
    return (
        <div className='app-list'>
            {
                itemsData.map(item => (
                    <Card item={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default List