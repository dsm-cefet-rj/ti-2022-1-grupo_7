import Criar from '../components/Anunciar/Criar';
import React from "react";


function Editar({setProduto, produto}){
        return(
  <>
    <Criar handleImputChange setProduto={setProduto} produto={produto}/>
  </>    
  )
}

export default Editar;
