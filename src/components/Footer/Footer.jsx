import React from "react";
import './Footer.css'
import FotoCriador from './foto_perfil_.jpeg'


const Footer = () => {

    return (
        <footer>
            <div className="infoCriador">
                <img className='fotoCriador' src={FotoCriador} alt="foto do criador da landing page" />
                <span>
                    <span>Roger Vasconcelos</span>
                    <span>@rogerdev</span>
                </span>
            </div>
            <div className="redesCriador">
                <a href="https://www.instagram.com/rogerdev_/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a href="linkedin.com/in/roger-vasconcelos-santana-135442165/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/rogerdev1" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
        </footer>
    )
}

export default Footer
