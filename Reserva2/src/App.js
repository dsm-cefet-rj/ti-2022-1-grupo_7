import './App.css';
import Catalogo from './components/catalogo/Catalogo';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Produto from './components/Produto/Produto';
import React, { useState } from "react";
import './Aplicativo.css';
import Vender from './Vender';

function App(){
  
  const [tableData, setTableData] = useState([])
  const [formInputData, setformInputData] = useState(
      {
      nomeProduto:'',
      qtdProduto:''
      }
  );
 
  const handleChange=(evnt)=>{  
      const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
      setformInputData(newInput)
  }
  
  const handleSubmit= (evnt) =>{
      evnt.preventDefault();
      const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
      if(checkEmptyInput)
      {
        const newData = (data)=>([...data, formInputData])
        setTableData(newData);
        const emptyInput= {nomeProduto:'', qtdProduto:''}
        setformInputData(emptyInput)
      }
  }


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
      <p></p>
      <Header/>
        <Vender handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
      <Footer/>
    </div>
    
  )
}

export default App;