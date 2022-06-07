import './App.css';
import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/HomePag'
import Anunciar from './pages/AnunciarPag'
import Perfil from './pages/PerfilPag'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import ProdutoPag from './pages/ProdutoPag';


function App() {

    // const[produto, setProduto] = useState(
    //   [{
    //     id: 1,
    //     nomeProduto:'Calça Verde',
    //     descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
    //     tamanho:'P',
    //     categoria:'Calça',
    //     preco:'249.99'
    //   },
    //   {
    //     id: 2,
    //     nomeProduto:'Calça Verde',
    //     descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
    //     tamanho:'P',
    //     categoria:'Calça',
    //     preco:'249.99'
    //   },
    //   {
    //     id: 3,
    //     nomeProduto:'Calça Verde',
    //     descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
    //     tamanho:'P',
    //     categoria:'Calça',
    //     preco:'249.99'
    //   },
    //   {
    //     id: 4,
    //     nomeProduto:'Calça Verde',
    //     descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
    //     tamanho:'P',
    //     categoria:'Calça',
    //     preco:'249.99'
    //   },
    //   {
    //     id: 5,
    //     nomeProduto:'Calça Verde',
    //     descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
    //     tamanho:'P',
    //     categoria:'Calça',
    //     preco:'249.99'
    //   },
    //   {
    //     id: 6,
    //     nomeProduto:'Calça Verde',
    //     descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
    //     tamanho:'P',
    //     categoria:'Calça',
    //     preco:'249.99'
    //   },
    //   {
    //     id: 7,
    //     nomeProduto:'Calça Verde',
    //     descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
    //     tamanho:'P',
    //     categoria:'Calça',
    //     preco:'249.99'
    //   },
    //   {
    //     id: 8,
    //     nomeProduto:'Calça Verde',
    //     descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
    //     tamanho:'P',
    //     categoria:'Calça',
    //     preco:'249.99'
    //   }]
    // );

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Perfil" element={<Perfil/>}/> 
        <Route path="/Anunciar" element={<Anunciar/>} />
        <Route path="/ProdutoPag" element={<ProdutoPag/>} /> 
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

