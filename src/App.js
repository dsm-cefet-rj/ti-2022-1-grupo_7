import './App.css';
import Catalogo from './components/catalogo/Catalogo';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Produto from './components/Produto/Produto';


function App() {
  return (
    <div className="App">
      <Header/>
      <Catalogo />
      <Footer/>
      <p></p>
      <Header/>
      <Produto
        foto ={'CalcaVerde.jpg'} 
        preco = {'249,99'} 
        nomeProduto={'Calça Verde'} 
        categoria={'Calças'} 
        quantidade={1} 
        tamanho={'P'} 
        descProduto={'Calça verde feita de tecido resistente a chuvas, fogo e até mesmo sujeira, usada como uniforme em exercitos russos.'}/>
      <Footer/>
    </div>
  );
}

export default App;
