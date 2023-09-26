import React, { useState, } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ButtonTop from './components/ButtonTop/ButtonTop';

function App() {

  const [qtdCarrinho, setQtdCarrinho] = useState(0);
  const [carrinho, setCarrinho] = useState([]);

  const handleAddCarrinho = (item) => {
    // Lógica para aumentar a quantidade no carrinho
    setQtdCarrinho(qtdCarrinho + 1);
    setCarrinho([...carrinho, item]);

  };


  return (

    <div className="App">
      <Header qtdCarrinho={qtdCarrinho} carrinho={carrinho}/>
      <Main addProdutoCarrinho={handleAddCarrinho}/>
      <Footer/>
      <ButtonTop />
    </div>
  );
}

export default App;
