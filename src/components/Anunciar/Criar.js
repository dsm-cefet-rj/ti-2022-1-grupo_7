import './Criar.css'
import React, {useState} from 'react';

export default function Criar(props){

    const [produto, setProduto] = useState();

    function handleImputChange(e){
        setProduto({...produto,[e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        props.setProduto(props.produto.concat(produto));
    }
  
    return (
        <>
            <div id="Vender">
                <h1 className='Titulo'>Produtos</h1>
                <form id="form_produto" className="Add_form" onSubmit={handleSubmit}>
                    <label>Nome do props.produto:</label>
                    <input 
                        type="text" 
                        onChange={handleImputChange}     
                        name="nomeProduto" 
                        className="form-control"  
                        placeholder="Nome"
                    />
                    <label>Descrição:</label>
                    <input 
                        type="text" 
                        onChange={handleImputChange} 
                        name="descProduto" 
                        className="form-control"  
                        placeholder="Descrição do Produto"
                        />
                    <label>Quantidade:</label>
                    <input 
                        type="number" 
                        onChange={handleImputChange} 
                        name="quantidade" 
                        className="form-control" 
                        placeholder="Defina a quantidade de peças"
                    />


                    <label>Valor:</label>
                    <input 
                        type="text" 
                        onChange={handleImputChange}  
                        name="preco" 
                        className="form-control"  
                        placeholder="Preço do props.produto"
                    />
                  
                
                  <label>Categoria:</label>
                        <select 
                        onChange={handleImputChange}
                        name="categoria"
                        >
                            <option value="Calça">Calça</option>
                            <option value="Camisa">Camisa</option>
                            <option value="Jaqueta e Casacos">Jaqueta e Casacos</option>
                            <option value="Tenis">Tênis</option>
                        </select>

                        <label>Tamanho:</label>
                        <select 
                        onChange={handleImputChange}
                        // onChange={(e) => props.setProduto(e.target.value)}
                        name="tamanho"
                        >
                            <option value="PP">PP</option>
                            <option value="P">P</option>
                            <option value="M">M</option>
                            <option value="GG">G</option>
                            <option value="GG">GG</option>
                        </select>
                  
                <br></br>
                    <input type="submit" value="Anunciar"/>
    
                </form>
            </div>
        </>
    );
}
 

