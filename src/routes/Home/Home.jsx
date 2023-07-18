import React from 'react'

import { Slider, Featured, Categories } from '../../components'

const Home = () => {
    return (
        <div>
            <Slider />
            <Featured type="featured" />
            <Categories />
            <Featured type="trending" />
        </div>
    )
}

export default Home