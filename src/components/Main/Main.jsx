import React from "react";
import './Main.css'
import Jordan4 from './air-jordan-4.png'


const Main = () => {

    return (
        <main>
            <div className="leftSide">
                {/* <span className="valueShoe">$200</span> */}
                <span className="titleShoe">
                    <span className="marcaShoe">Air Jordan 4 Retro</span>
                    <span className="modelShoe"> INFRARED</span>
                </span>
                <span className="starShoe">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </span>
                <p className="describeShoe">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged
                </p>
                <button className="addCart">ADD ON CART</button>
            </div>
            <div className="rightSide">
                <img src={Jordan4} alt="Foto Tênis Jordan 4 Retro" />
            </div>
        </main>
    )
}

export default  Main
