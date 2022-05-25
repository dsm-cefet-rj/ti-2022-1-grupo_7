import './App.css';
import Criar from './components/Produto/Criar';
import React, { useState } from "react";


function Anunciar(){
        return(
  <>
  
    <Header/>
    
        <Criar handleImputChange/>
  </>  
   
  )
}

export default App;
