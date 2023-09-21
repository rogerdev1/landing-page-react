import React from "react";
import './CardDetalhe.css'

const CardDetalhe = props => {

    return(
        <>
            <div className="img-card-details">
                <img src={props.imagemDetalheTenis} alt="foto detalhe air jordan 4" />
            </div>
            <div className="text-card-details">
                <div className="cardTitle">
                    {props.tituloDetalhe}
                </div>
                <div className="cardBody">
                    <p>
                        {props.children}
                    </p>
                </div>
            </div>
        </>
    )
}

export default CardDetalhe
