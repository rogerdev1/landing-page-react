import React from "react";
import './Main.css'
import './Main-media-queries.css'
import Jordan4 from './assets/img/air-jordan-4.png'
import detalhe1Jordan from './assets/img/img-detalhe-air-jordan.png'
import detalhe2Jordan from './assets/img/img-detalhe2-air-jordan.png'
import detalhe5Jordan from './assets/img/img-detalhe5-air-jordan.png'
import detalhe4Jordan from './assets/img/img-detalhe4-air-jordan.png'
import detalhe6Jordan from './assets/img/img-detalhe6-air-jordan.png'
import detalhe7Jordan from './assets/img/img-detalhe7-air-jordan.png'
import detalhe8Jordan from './assets/img/img-detalhe8-air-jordan.png'
import logoJordan from './assets/img/jordan-2-logo-svgrepo-com.svg'
import CardModelo from "./CardModelo/CardModelo";
import CardDetalhe from "./CardDetalhes/CardDetalhe";


const Main = ({ addProdutoCarrinho }) => {

    return (
        <main>
            <div className="firstRow">
                <div className="leftSide">
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
            </div>
            <article className="secondRow">
                <h1 className="titleSection">ATEMPORAL</h1>
                <section className='card-design'>
                    <CardDetalhe
                        imagemDetalheTenis={detalhe4Jordan}
                        tituloDetalhe='Design'
                    >
                        O Air Jordan 4 Retro Infrared possui um design de cano médio,
                        com uma silhueta que se destaca por suas linhas limpas e
                        estruturadas. O design é marcado por painéis em relevo, como
                        o couro texturizado na parte superior.

                    </CardDetalhe>
                </section>
                <section className='card-detalhe-design'>
                    <CardDetalhe
                        imagemDetalheTenis={detalhe2Jordan}
                        tituloDetalhe='Detalhes do Design'
                    >
                        O Air Jordan 4 é famoso por seus detalhes de design distintos,
                        como a aba de calcanhar com o logotipo Jumpman da Jordan e o
                        sistema de amarração com ilhós em forma de asa. Além disso,
                        possui a entressola com tecnologia de amortecimento Air-Sole
                        para conforto durante o uso.
                    </CardDetalhe>
                </section>
                <section className='card-cores'>
                    <CardDetalhe
                        imagemDetalheTenis={detalhe5Jordan}
                        tituloDetalhe='Cores'
                    >
                        A cor "Infrared" se refere à tonalidade vermelha que é um dos principais
                        destaques deste tênis. O vermelho brilhante é usado nas áreas do calcanhar
                        e da sola, bem como nos detalhes dos cadarços e na língua. O resto do tênis
                        geralmente é em cores neutras, como preto, branco e cinza, criando um
                        contraste visual atraente.
                    </CardDetalhe>
                </section>
                <section className='card-material'>
                    <CardDetalhe
                        imagemDetalheTenis={detalhe1Jordan}
                        tituloDetalhe='Material'
                    >
                        Feito para impressionar, o Air Jordan 4 Retro "Infrared" é uma obra-prima em matéria
                        de materiais premium. Sua parte superior é adornada com couro de alta qualidade
                        que não apenas oferece durabilidade, mas também um toque de luxo. A atenção aos
                        detalhes é impecável, desde os painéis texturizados até os icônicos ilhós em forma
                        de asa. Cada par é mais do que um tênis, é uma obra de arte.
                    </CardDetalhe>
                </section>
            </article>
            <article className="thirddRow">
                <h1 className="titleSection">Mais Modelos</h1>
                <section>
                    <CardModelo
                        imagemMarca={logoJordan}
                        imagemTenis={detalhe6Jordan}
                        nomeTenis='Infrared'
                        valorTenis='1.499,00'
                        addProdutoCarrinho={addProdutoCarrinho}
                    />
                    <CardModelo

                        imagemMarca={logoJordan}
                        imagemTenis={detalhe7Jordan}
                        nomeTenis='Military'
                        valorTenis='1.149,00'
                        addProdutoCarrinho={addProdutoCarrinho}
                    />
                    <CardModelo
                        imagemMarca={logoJordan}
                        imagemTenis={detalhe8Jordan}
                        nomeTenis='Off White'
                        valorTenis='1.249,00'
                        addProdutoCarrinho={addProdutoCarrinho}
                    />
                </section>
            </article>
        </main>
    )
}

export default  Main
