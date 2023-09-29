import React from "react";
import './CardModelo.css'

const CardModelo = (props) => {

    const {addProdutoCarrinho} = props

    const item = {
        logo: props.imagemMarca,
        img: props.imagemTenis,
        nome: props.nomeTenis,
        valor: props.valorTenis
    };

    return (
        <div className="outrosModelos">
            <div className='cardOffer'>
                <div className="cardTitle">
                    <div className="marca">
                        <img src={item.logo} alt="Marca Jordan" width='30px' />
                    </div>
                    <div className="tenis">
                        <img src={item.img} alt={`Imagem do Air Jordan 4 ${item.nome}`} width='300px' />
                    </div>
                </div>
                <div className="cardBody">
                    <h2>{item.nome}</h2>
                    <p>R$ {item.valor}</p>
                    <button
                        className="addCart"
                        onClick={() => addProdutoCarrinho(item)}
                    >
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>
        </div>

    )
}

export default CardModelo
