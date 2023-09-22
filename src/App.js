import React, { useState, } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {

  const [qtdCarrinho, setQtdCarrinho] = useState(0);

  const handleAddCarrinho = () => {
    // Lógica para aumentar a quantidade no carrinho
    setQtdCarrinho(qtdCarrinho + 1);
  };

  return (
    <div className="App">
      <Header
        qtdCarrinho={qtdCarrinho}
      />
      <button
        onClick={handleAddCarrinho}
      >ADDDDDDDDDDDDDDDDDDDDDD</button>

      <Main addProdutoCarrinho={handleAddCarrinho} />
      <Footer/>
    </div>
  );
}

export default App;
