import React from 'react'

import './Slider.css'

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Slider = () => {

    const [currentImg, setCurrentImg] = React.useState(0);

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const prevSlide = () => {
        setCurrentImg(currentImg === 0 ? data.length - 1 : (prev) => prev - 1);
    }

    const nextSlide = () => {
        setCurrentImg(currentImg === data.length - 1 ? 0 : (prev) => prev + 1);
    }

    return (
        <div className='app-slider'>
            <div className='app-slider-images' style={{ transform: `translateX(-${currentImg * 100}vw)` }}>
                <img src={data[0]} />
                <img src={data[1]} />
                <img src={data[2]} />
            </div>
            <div className='app-slider-buttons'>
                <div className='app-slider-buttons-left' onClick={prevSlide}>
                    <BsArrowLeft />
                </div>
                <div className='app-slider-buttons-right' onClick={nextSlide}>
                    <BsArrowRight />
                </div>
            </div>
        </div>
    )
}

export default Slider