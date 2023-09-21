import React from "react";
import './CardModelo.css'

const CardModelo = props => {

    return (
        <div className="outrosModelos">
            <div className='cardOffer'>
                <div className="cardTitle">
                    <div className="marca">
                        <img src={props.imagemMarca} alt="Marca Jordan" width='30px' />
                    </div>
                    <div className="tenis">
                        <img src={props.imagemTenis} alt={`Imagem do Air Jordan 4 ${props.nomeTenis}`} width='300px' />
                    </div>
                </div>
                <div className="cardBody">
                    <h2>{props.nomeTenis}</h2>
                    <p>R$ {props.valorTenis}</p>
                    <a href="/" className="addCart">ADD TO CART</a>
                </div>
                <div className="cardFooter"></div>
            </div>
        </div>

    )
}

export default CardModelo
