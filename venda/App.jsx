import React, { useState } from "react";
import './App.css';
import Produto from './Vender';

const App = () => {
  
  const [tableData, setTableData] = useState([])
  const [formInputData, setformInputData] = useState(
      {
      nomeProduto:'',
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
        const emptyInput= {nomeProduto:''}
        setformInputData(emptyInput)
      }
  }
  
  return(
  <>
     <main>
    
        <Produto handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>

      </main>
  </>  
   
  )
}

export default App;
