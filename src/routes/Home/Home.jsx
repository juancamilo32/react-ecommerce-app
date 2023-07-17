import React from 'react'

import { Slider, Featured } from '../../components'

const Home = () => {
    return (
        <div>
            <Slider />
            <Featured type="featured" />
            <Featured type="trending" />
        </div>
    )
}

export default Home