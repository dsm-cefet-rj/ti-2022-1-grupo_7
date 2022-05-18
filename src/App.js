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
      <Produto/>
      <Footer/>
    </div>
  );
}

export default App;
