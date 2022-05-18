import React from "react";

const Vender = ({handleChange, formInputData, handleSubmit}) => {
  
    return (
        
            <div id="Vender">
                <div id="header">
                    <h1>Produtos</h1>
                </div>
                <form id="form_produto" class="Add_form">
                    <label>Nome do produto:</label>
                    <input 
                        type="text" 
                        onChange={handleChange} value={formInputData.nomeProduto} name="nomeProduto" className="form-control"  placeholder="Nome"
                    />
                  
                    <label>Descrição:</label>
                    <input 
                      type="text" 
                      onChange={handleChange} value={formInputData.nomeDescricao} name="DescricaoProduto" className="form-control"  placeholder="Descrição da peça"
                      />  

                  <label>Quantidade:</label>
                    <input 
                        type="number" onChange={handleChange} value={formInputData.qtdProduto} name="qtdProduto" className="form-control" placeholder="Defina a quantidade de peças"
                    />

                  <label>Preço:</label>
                    <input 
                        type="number" onChange={handleChange} value={formInputData.valorProduto} name="precoProduto" className="form-control" placeholder="Defina o preço da peça"
                    />

                  <label>Categoria:</label>
                        <select>
                            <option value="P">Calça</option>
                            <option value="M">Camisa</option>
                            <option value="G">Jaqueta e Casacos</option>
                            <option value="GG">Tênis</option>
                        </select>
                  
                  <br></br>
                    <input type="submit" onClick={handleSubmit} class="btn" />

    
                </form>
            </div>
        
    )
}
 
export default Vender;