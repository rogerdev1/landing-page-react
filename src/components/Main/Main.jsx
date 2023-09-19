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
                    A atemporalidade do Air Jordan 4 Retro "Infrared"!
                    Este ícone da cultura sneaker traz a mistura perfeita de estilo
                    clássico e a energia vibrante do vermelho "Infrared". O design
                    elegante, com detalhes em relevo e o logotipo Jumpman,
                    é simplesmente inconfundível. Um verdadeiro clássico da moda
                    que nunca sai de moda.
                </p>
                <a href="https://www.nike.com.br/snkrs/air-jordan-4-022452.html?cor=7T&utm_source=GP_search&utm_medium=Cpc&utm_campaign=Jordan_Brand&utm_content=DSA_Jordan&gclid=CjwKCAjwjaWoBhAmEiwAXz8DBdXKsajEaXUJCQJiYsUahLmtpkBdcQzBxTbRO9wFq8_PAG_533BkaRoCj2kQAvD_BwE&utm_referrer=https://www.google.com/"
                    className="addCart">
                        ADQUIRA AGORA!
                </a>
            </div>
            <div className="rightSide">
                <img src={Jordan4} alt="Foto Tênis Jordan 4 Retro" />
            </div>
        </main>
    )
}

export default  Main
