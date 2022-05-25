import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/HomePag'
import Anunciar from './pages/AnunciarPag'
import Perfil from './pages/PerfilPag'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import ProdutoPag from './pages/ProdutoPag';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Perfil" element={<Perfil/>}/> 
        <Route path="/Anunciar" element={<Anunciar/>}/>
        <Route path="/ProdutoPag" element={<ProdutoPag/>}/> 
      </Routes>  
      <Footer/>
    </Router>
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
