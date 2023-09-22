import React from "react";
import './Carrinho.css'
import imagemLogo from './nike.svg'

const Carrinho = ({ items }) => {

    const fechaCarrinho = ()=>{
        document.querySelector('.fa-close').addEventListener('click', () => {
            document.querySelector('.Carrinho').style.display = 'none'
        })
    }

    return (
        <div className="Carrinho">
            <ul className="listaCarrinho">
                <div className="closeCarrinho">
                    <i className="fa-solid fa-close" onClick={fechaCarrinho}></i>
                    <div>
                        <img src={imagemLogo} alt="" width='60px' />
                    </div>
                </div>
                {items.map((item, index) => (
                    <li key={index} className="item">
                        <div className="produto">
                            <div className="imgProdutoCarrinho">
                                <img src={item.img} alt="" width='150px' />
                            </div>
                            <div className="infoProdutoCarrinho">
                                <h4>{item.nome}</h4>
                                <span>{item.valor}</span>
                                <span>Quantidade</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default Carrinho
