import React from "react";
import './CardModelo.css'

const CardModelo = (props) => {

    const {addProdutoCarrinho} = props

    const item = {
        logo: props.imagemMarca,
        img: props.imagemTenis,
        nome: props.nomeTenis,
        valor: props.valorTenis
        // Outras props do CardModelo
    };

    // const handleAddCarrinhoClick = () => {
    //     // Quando o botão for clicado, chame a função passada como prop
    //     addProdutoCarrinho();
    // };

    // const larguraDaTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // const alturaDaTela = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // console.log(`Largura da Tela: ${larguraDaTela}px`);
    // console.log(`Altura da Tela: ${alturaDaTela}px`);

    // if(larguraDaTela < 768){
    //     return (
    //         <div className="carrossel-container">
    //             <div className="carrossel-item">Item 1</div>
    //             <div className="carrossel-item">Item 2</div>
    //             <div className="carrossel-item">Item 3</div>
    //             {/* Adicione mais itens conforme necessário */}
    //         </div>
    //     )
    // }

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
                        onClick={() => addProdutoCarrinho(item)}>ADD TO CART
                    </button>
                </div>
            </div>
        </div>

    )
}

export default CardModelo
