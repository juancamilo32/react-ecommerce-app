import React from 'react'

import { Slider, Featured, Categories, Contact } from '../../components'

const Home = () => {
    return (
        <div>
            <Slider />
            <Featured type="featured" />
            <Categories />
            <Featured type="trending" />
            <Contact />
        </div>
    )
}

export default Home