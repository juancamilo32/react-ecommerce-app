import React from 'react'

import './List.css'

import { itemsData } from '../../constants/constants'

import Card from '../Card/Card'

const List = ({ categoryId, maxPrice, sort }) => {

    let displayData = itemsData

    const sortByPrice = () => {
        if (sort === "asc") {
            displayData.sort((a, b) => a.price - b.price)
        }
        else if (sort === "desc") {
            displayData.sort((a, b) => b.price - a.price)
        }
    }

    const sortByCategory = () => {
        let tempData = itemsData
        let womenData = []
        let menData = []
        tempData.map(item => item.tags.includes("Women") ? womenData.push(item) : null)
        tempData.map(item => item.tags.includes("Men") ? menData.push(item) : null)
        if (categoryId === 1) {
            displayData = womenData;
        }
        else if (categoryId === 2) {
            displayData = menData;
        }
        else {
            displayData = itemsData
        }
    }

    const sortItems = () => {
        sortByCategory()
        sortByPrice()
    }

    React.useMemo(() => {
        displayData.map(item => item.price <= maxPrice ? item.hidden = false : item.hidden = true)
    }, [maxPrice])


    return (
        <div className='app-list'>
            {
                sortItems()
            }
            {
                displayData.map(item => !item.hidden ? (
                    <Card item={item} key={item.id} />
                ) : null)
            }
        </div>
    )
}

export default List