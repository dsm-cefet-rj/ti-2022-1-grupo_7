import Criar from '../components/Publico/Anunciar/Criar';
import React from "react";


function Anunciar({setProduto, produto}){
        return(
  <>
    <Criar handleImputChange setProduto={setProduto} produto={produto}/>
  </>    
  )
}

export default Anunciar;
