import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePag'
import Anunciar from './pages/AnunciarPag'
import Login from './pages/LoginPag'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import ProdutoPag from './pages/ProdutoPag';
import { fetchBanco } from './components/Redux/boxSlice'
import { Provider } from 'react-redux';
import store from './components/Redux/Store.js';
import Cadastrar from './pages/CadastroPerfilPag';
import Perfil from './pages/PerfilPag'
import BoxAdmPag from './pages/BoxAdmPag'
import Editar from './pages/EditarPag'

store.dispatch(fetchBanco());

function App() {
  const token = localStorage.getItem('token');
  const [userType, setUserType] = useState("");


  useEffect(() => {
    // get user type from token
    if (token) {
      const tokenData = JSON.parse(atob(token.split(".")[1]));
      setUserType(tokenData.tipo);
    }
  })

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          {/* Rotas de todos */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="/ProdutoPag" element={<ProdutoPag />} />

          <Route path="/Perfil" element={<Perfil />} />
          {/* <Route path="/BoxAdmPag" element={<BoxAdmPag />} /> */}

          {/* Rotas usuário */}
          {
            token
              ? (
                <>
                  <Route path="/Anunciar" element={<Anunciar />} />
                  <Route path="/Editar" element={<Editar />} />
                </>
                )
              : null
          }

          {userType === "adm" && (
            <>
              <Route path="/BoxAdmPag" element={<BoxAdmPag />} />
            </>
          )}





          {/* Rota não logado */}
          {
            !token && (
              <>
                <Route path="/Login" element={<Login />} />
                <Route path="/Cadastrar" element={<Cadastrar />} />
              </>
            )
          }
          {/* 404 */}
          <Route path="*" element={<div>404</div>} />

        </Routes>
        <Footer />
      </Router>
    </Provider >
  );
}

export default App;
