import React from "react";
import './CardModelo.css'

const CardModelo = (props) => {
    const {addProdutoCarrinho} = props

    const handleAddCarrinhoClick = () => {
        // Quando o botão for clicado, chame a função passada como prop
        addProdutoCarrinho();
    };

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
                    <button
                        className="addCart"
                        onClick={handleAddCarrinhoClick}>ADD TO CART
                    </button>
                </div>
            </div>
        </div>

    )
}

export default CardModelo
