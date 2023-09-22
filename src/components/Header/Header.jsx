import React from "react";
import './Header.css'
import logoNike from './nike.png'

const Header = props => {
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
                            <a href="/" className="navbarLink" >Item1</a>
                        </li>
                        <li className="navbarItem">
                            <a href="/" className="navbarLink">Item2</a>
                        </li>
                        <li className="navbarItem">
                            <a href="/" className="navbarLink">Item3</a>
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
                <div className="favBag">
                    <span>{props.qtdCarrinho}</span>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </header>
    )
}

export default Header
