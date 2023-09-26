import React from "react";
import './Header.css'
import logoNike from './nike.png'
import Carrinho from '../Carrinho/Carrinho'

const Header = props => {

    const { carrinho } = props

    const abrirCarrinho = () => {
        document.querySelector('.favBag').addEventListener('click', () => {
            document.querySelector('.Carrinho').style.display = 'block'
            document.querySelector('.Carrinho').style.marginLeft = '0px'
        })
    }

    return(
        <header>
            <div className="firstRow">
                <a href="https://www.nike.com.br/" className="areaLogo">
                    <img src={logoNike} alt="logo da marca" width='40px' />
                </a>
                <div className="favBagMobile">
                    <i className="fa-regular fa-heart"></i>
                    <i class="bi bi-bag"></i>
                </div>
                <nav className="navbarHeader">
                    <i className="fa-solid fa-bars"></i>
                    <ul className="navbarMenu">
                        <li className="navbarItem">
                            <a href="https://www.nike.com.br/nav?sorting=DescReleaseDate" className="navbarLink">Lançamentos</a>
                        </li>
                        <li className="navbarItem">
                            <a href="https://www.nike.com.br/nav/ofertas/emoferta" className="navbarLink">Ofertas</a>
                        </li>
                        <li className="navbarItem">
                            <a href="https://www.nike.com.br/snkrs" className="navbarLink" >SNKRS</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="secondRow">
                <form action="">
                    <label htmlFor="searchFormHeader">
                        <i className="fa-solid fa-search"></i>
                    </label>
                    <input type="text" name="searchFormHeader" id="searchFormHeader" className="searchFormHeader" placeholder="Seacrh" />
                </form>
                <div className="favBag" onClick={abrirCarrinho}>
                    <span>{props.qtdCarrinho}</span>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
            <Carrinho items={carrinho} />

        </header>
    )
}

export default Header
