import './App.css';
import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePag'
import Anunciar from './pages/AnunciarPag'
import Login from './pages/LoginPag'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import ProdutoPag from './pages/ProdutoPag';
import {fetchBanco} from './components/Redux/boxSlice'
import { Provider } from 'react-redux';
import store from './components/Redux/store.js';
import Cadastrar from './pages/CadastroPerfilPag';
import Perfil from './pages/PerfilPag'
import BoxAdmPag from './pages/BoxAdmPag'

store.dispatch(fetchBanco());

function App() {


  return (
    <Provider store={store}>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login/>}/> 
        <Route path="/Anunciar" element={<Anunciar />} />
        <Route path="/ProdutoPag" element={<ProdutoPag/>} /> 
        <Route path="/Cadastrar" element={<Cadastrar/>} /> 
        <Route path="/Perfil" element={<Perfil/>} /> 
        <Route path="/BoxAdmPag" element={<BoxAdmPag/>} /> 
      </Routes>  
      <Footer/>
    </Router>
    </Provider>
  );
}

export default App;















// import './App.css';
// import Catalogo from './components/catalogo/Catalogo';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import Produto from './components/Produto/Produto';


// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Catalogo />
//       <Footer/>
//       <p></p>
//       <Header/>
//       <Produto 
//         foto ={'CalcaVerde.jpg'} 
//         preco = {'249,99'} 
//         nomeProduto={'Calça Verde'} 
//         categoria={'Calças'} 
//         quantidade={1} 
//         tamanho={'P'} 
//         descProduto={'Calça verde feita de tecido resistente a chuvas, fogo e até mesmo sujeira, usada como uniforme em exercitos russos.'}/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

