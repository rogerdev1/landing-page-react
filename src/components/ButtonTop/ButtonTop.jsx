import React from "react";
import './ButtonTop.css'


const ButtonTop = () => {


    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        console.log('click')
    }



    return (
        <button className="ButtonTop" onClick={scrollTop}>
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    )
}


export default ButtonTop
