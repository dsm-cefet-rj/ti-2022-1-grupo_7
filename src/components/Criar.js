import './Criar.css'
import React,{useState} from 'react';

export default function Criar(){
const [projeto,setProjeto] = useState({}); 
function handleImputChange(e){
    setProjeto({...projeto,[e.target.name]: e.target.value});
}
  
    return (
        <>
           
            <div id="Vender">
                <div id="Titulo">
                    <h1>Produtos</h1>
                </div>
                <form id="form_produto" class="Add_form">
                    <label>Nome do produto:</label>
                    <input 
                        type="text" 
                        onChange={handleImputChange} value={projeto.nome} name="nomeProduto" className="form-control"  placeholder="Nome"
                    />
                    <label>Descrição:</label>
                    <input 
                        type="text" 
                        onChange={handleImputChange} value={projeto.descricao} name="descricao" className="form-control"  placeholder="Descrição do Produto"
                    />
                    <label>Quantidade:</label>
                    <input 
                        type="number" onChange={handleImputChange} value={projeto.qtdProduto} name="qtdProduto" className="form-control" placeholder="Defina a quantidade de peças"
                    />


                    <label>Valor:</label>
                    <input 
                        type="text" 
                        onChange={handleImputChange} value={projeto.valor} name="ValorProduto" className="form-control"  placeholder="Preço do produto"
                    />
                  
                
                  <label>Categoria:</label>
                        <select onChange={handleImputChange}>
                            <option value="P">Calça</option>
                            <option value="M">Camisa</option>
                            <option value="G">Jaqueta e Casacos</option>
                            <option value="GG">Tênis</option>
                        </select>

                        <label>Tamanho:</label>
                        <select onChange={handleImputChange}>
                            <option value="PP">PP</option>
                            <option value="P">P</option>
                            <option value="M">M</option>
                            <option value="GG">G</option>
                            <option value="GG">GG</option>
                        </select>
                  
                  <br></br>
                    <input type="submit" value="Submit"  />

    
                </form>
            </div>
        </>
    );
}
 

