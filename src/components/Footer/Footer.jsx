import React from "react";
import './Footer.css'
import FotoCriador from './foto_perfil_.jpeg'
import logoNike from '../../assets/img/nike.png'



const Footer = () => {

    return (
        <footer>
            <div className="firstRow">
                <div>
                    <a href="https://www.nike.com.br/sc/encontre-uma-loja" target="_blank" rel="noreferrer">Encontre Uma Loja Nike</a>
                    <a href="https://accounts.nike.com/lookup?client_id=b8277a07e530f1a44fa44feecd7c5276&redirect_uri=https://login.gruposbf.com.br/auth/realms/nike/broker/oidc/endpoint&response_type=code&scope=membership:partner_entitlements::read:%20order_management:linked_partner_orders::create:%20contactbr%20openid%20profile%20email&state=M24LaviEHonifFiivVVYR8b9gwJ-QRKi6FWlHhqAKkU.gsv-Y-303S0.nike-front&prompt=login&code_challenge=UVv6v50cz12a_eI9hmKJURme812O9LuZwfYIR8HYdes&code_challenge_method=S256&nonce=LQnZJR8DARU8UACkDl9aWg" target="_blank" rel="noreferrer">Cadastre-se para receber novidades</a>
                    <a href="https://www.nike.com.br/sc/cartao-presente" target="_blank" rel="noreferrer">Cartão Presente</a>
                    <a href="https://www.nike.com.br/mapa-do-site"  target="_blank" rel="noreferrer">Mapa do Site</a>
                </div>
                <div className="ajuda">
                    <span>Ajuda</span>
                    <a href="https://atendimento.nike.com.br/hc/pt-br/sections/5331142558099-D%C3%BAvidas-Gerais?_gl=1*1utd3vq*_ga*NTMzMTQ2NzAxLjE2OTUwODUzNjE.*_ga_SP41LSSVCP*MTY5NTM4Njc2OC40LjEuMTY5NTM4NzEwNC4zNy4wLjA.*_fplc*T0ExaiUyQmRWQmcwTktFbUMxa3FyYzN0RGk5JTJGV0FMJTJGYnd2STM0VVh2JTJCYjFhMXR1cjVpNUlselJrTG5meFZSNzk1ZktFZ1ppZkhjTThMN2doJTJCWmoxZ2NDakd4VGptc1plWEdXMTFEVSUyRkdaaHJBcCUyRmoyaFRiTFo2SnYyNU1pJTJCUSUzRCUzRA.." target="_blank" rel="noreferrer">Dúvidas Gerais</a>
                    <a href="https://atendimento.nike.com.br/hc/pt-br/sections/5331161233171-Encontre-seu-Tamanho?_gl=1*l245sq*_ga*NTMzMTQ2NzAxLjE2OTUwODUzNjE.*_ga_SP41LSSVCP*MTY5NTM4Njc2OC40LjEuMTY5NTM4NzEwNC4zNy4wLjA.*_fplc*T0ExaiUyQmRWQmcwTktFbUMxa3FyYzN0RGk5JTJGV0FMJTJGYnd2STM0VVh2JTJCYjFhMXR1cjVpNUlselJrTG5meFZSNzk1ZktFZ1ppZkhjTThMN2doJTJCWmoxZ2NDakd4VGptc1plWEdXMTFEVSUyRkdaaHJBcCUyRmoyaFRiTFo2SnYyNU1pJTJCUSUzRCUzRA.." target="_blank" rel="noreferrer">Encontre seu Tamanho</a>
                    <a href="https://atendimento.nike.com.br/hc/pt-br/sections/5330991677203-Entrega?_gl=1*jegkjk*_ga*NTMzMTQ2NzAxLjE2OTUwODUzNjE.*_ga_SP41LSSVCP*MTY5NTM4Njc2OC40LjEuMTY5NTM4NzQzNS4zMy4wLjA.*_fplc*T0ExaiUyQmRWQmcwTktFbUMxa3FyYzN0RGk5JTJGV0FMJTJGYnd2STM0VVh2JTJCYjFhMXR1cjVpNUlselJrTG5meFZSNzk1ZktFZ1ppZkhjTThMN2doJTJCWmoxZ2NDakd4VGptc1plWEdXMTFEVSUyRkdaaHJBcCUyRmoyaFRiTFo2SnYyNU1pJTJCUSUzRCUzRA.." target="_blank" rel="noreferrer">Entregas</a>
                    <a href="https://atendimento.nike.com.br/hc/pt-br/sections/5331072633491-Pedidos?_gl=1*3a2ufl*_ga*NTMzMTQ2NzAxLjE2OTUwODUzNjE.*_ga_SP41LSSVCP*MTY5NTM4Njc2OC40LjEuMTY5NTM4NzQzNS4zMy4wLjA.*_fplc*T0ExaiUyQmRWQmcwTktFbUMxa3FyYzN0RGk5JTJGV0FMJTJGYnd2STM0VVh2JTJCYjFhMXR1cjVpNUlselJrTG5meFZSNzk1ZktFZ1ppZkhjTThMN2doJTJCWmoxZ2NDakd4VGptc1plWEdXMTFEVSUyRkdaaHJBcCUyRmoyaFRiTFo2SnYyNU1pJTJCUSUzRCUzRA.." target="_blank" rel="noreferrer">Pedidos</a>
                    <a href="https://atendimento.nike.com.br/hc/pt-br/sections/5330983405075-Trocas-e-devolu%C3%A7%C3%B5es?_gl=1*3a2ufl*_ga*NTMzMTQ2NzAxLjE2OTUwODUzNjE.*_ga_SP41LSSVCP*MTY5NTM4Njc2OC40LjEuMTY5NTM4NzQzNS4zMy4wLjA.*_fplc*T0ExaiUyQmRWQmcwTktFbUMxa3FyYzN0RGk5JTJGV0FMJTJGYnd2STM0VVh2JTJCYjFhMXR1cjVpNUlselJrTG5meFZSNzk1ZktFZ1ppZkhjTThMN2doJTJCWmoxZ2NDakd4VGptc1plWEdXMTFEVSUyRkdaaHJBcCUyRmoyaFRiTFo2SnYyNU1pJTJCUSUzRCUzRA.." target="_blank" rel="noreferrer">Trocas e Devoluções</a>
                    <a href="https://atendimento.nike.com.br/hc/pt-br/sections/5331065761427-Pagamentos?_gl=1*kb8rxs*_ga*NTMzMTQ2NzAxLjE2OTUwODUzNjE.*_ga_SP41LSSVCP*MTY5NTM4Njc2OC40LjEuMTY5NTM4NzM0OC41MC4wLjA.*_fplc*T0ExaiUyQmRWQmcwTktFbUMxa3FyYzN0RGk5JTJGV0FMJTJGYnd2STM0VVh2JTJCYjFhMXR1cjVpNUlselJrTG5meFZSNzk1ZktFZ1ppZkhjTThMN2doJTJCWmoxZ2NDakd4VGptc1plWEdXMTFEVSUyRkdaaHJBcCUyRmoyaFRiTFo2SnYyNU1pJTJCUSUzRCUzRA.." target="_blank" rel="noreferrer">Pagamentos</a>
                    <a href="https://atendimento.nike.com.br/hc/pt-br/sections/5331044797075-Produtos?_gl=1*3a2ufl*_ga*NTMzMTQ2NzAxLjE2OTUwODUzNjE.*_ga_SP41LSSVCP*MTY5NTM4Njc2OC40LjEuMTY5NTM4NzQzNS4zMy4wLjA.*_fplc*T0ExaiUyQmRWQmcwTktFbUMxa3FyYzN0RGk5JTJGV0FMJTJGYnd2STM0VVh2JTJCYjFhMXR1cjVpNUlselJrTG5meFZSNzk1ZktFZ1ppZkhjTThMN2doJTJCWmoxZ2NDakd4VGptc1plWEdXMTFEVSUyRkdaaHJBcCUyRmoyaFRiTFo2SnYyNU1pJTJCUSUzRCUzRA.." target="_blank" rel="noreferrer">Produtos</a>
                    <a href="https://atendimento.nike.com.br/hc/pt-br?_gl=1*1d3qp7x*_ga*NTMzMTQ2NzAxLjE2OTUwODUzNjE.*_ga_SP41LSSVCP*MTY5NTM4Njc2OC40LjEuMTY5NTM4NzQzNS4zMy4wLjA.*_fplc*T0ExaiUyQmRWQmcwTktFbUMxa3FyYzN0RGk5JTJGV0FMJTJGYnd2STM0VVh2JTJCYjFhMXR1cjVpNUlselJrTG5meFZSNzk1ZktFZ1ppZkhjTThMN2doJTJCWmoxZ2NDakd4VGptc1plWEdXMTFEVSUyRkdaaHJBcCUyRmoyaFRiTFo2SnYyNU1pJTJCUSUzRCUzRA.." target="_blank" rel="noreferrer">Fale Conosco</a>
                </div>
                <div className="sobre">
                    <span>Sobre a Nike</span>
                    <a href="https://www.nike.com.br/sc/feito-pra-jogar" target="_blank" rel="noreferrer">Feito pra Jogar</a>
                    <a href="https://www.nike.com.br/sc/sustentabilidade" target="_blank" rel="noreferrer">Sustentabilidade</a>
                    <a href="https://about.nike.com/en/impact?_gl=1*1ooilfm*_ga*NTMzMTQ2NzAxLjE2OTUwODUzNjE.*_ga_SP41LSSVCP*MTY5NTM4Njc2OC40LjEuMTY5NTM4Nzc4MC40My4wLjA.*_fplc*T0ExaiUyQmRWQmcwTktFbUMxa3FyYzN0RGk5JTJGV0FMJTJGYnd2STM0VVh2JTJCYjFhMXR1cjVpNUlselJrTG5meFZSNzk1ZktFZ1ppZkhjTThMN2doJTJCWmoxZ2NDakd4VGptc1plWEdXMTFEVSUyRkdaaHJBcCUyRmoyaFRiTFo2SnYyNU1pJTJCUSUzRCUzRA.." target="_blank" rel="noreferrer">Sobre a Nike, Inc.</a>
                    <a href="https://ri.gruposbf.com.br/" target="_blank" rel="noreferrer">Sobre o Grupo SBF</a>
                </div>
                <div className="pagamento">
                    <span>Formas de Pagamento</span>
                    <i className="fa-brands fa-cc-mastercard"></i>
                    <i className="fa-brands fa-cc-visa"></i>
                    <i className="fa-brands fa-cc-amex"></i>
                    <i className="fa-brands fa-cc-discover"></i>
                    <i className="fa-brands fa-pix"></i>
                </div>
            </div>
            <div className="secondRow">
                <div className="infoCriador">
                    <img className='fotoCriador' src={FotoCriador} alt="foto do criador da landing page" />
                    <span>
                        <span>Roger Vasconcelos</span>
                        <span>@rogerdev</span>
                    </span>
                </div>
                <div>
                    <img src={logoNike} alt="logo nike" width='50px' />
                </div>
                <div className="redesCriador">
                    <a href="https://www.instagram.com/rogerdev_/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a href="linkedin.com/in/roger-vasconcelos-santana-135442165/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/rogerdev1" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div className="mensagemFooter">Criado para projeto estudantil.</div>
        </footer>
    )
}

export default Footer
