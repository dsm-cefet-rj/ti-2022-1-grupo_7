import './App.css';
import Criar from './components/Produto/Criar';
import React, { useState } from "react";
import Header from './components/Produto/Header';


function Anunciar(){
        return(
  <>
  
    <Header/>
   
     <main>
    
        <Criar handleImputChange/>

      </main>
  </>  
   
  )
}

export default App;
