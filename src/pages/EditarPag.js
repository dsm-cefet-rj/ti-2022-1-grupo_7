import Edicao from '../components/Editar/Edicao';
import { useSelector } from "react-redux";
import React from "react";


function Editar(){

    const produto = useSelector(state=>state.box.produtoSelecionado);
    
        return(
  <>
    <Edicao produtos={produto}/>
  </>    
  )
}

export default Editar;
