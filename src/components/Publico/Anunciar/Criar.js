import './Criar.css'
import React, {useState} from 'react';
import { addBox } from '../../Redux/boxSlice';
import { useDispatch } from "react-redux";
import { showMessage, hideMessage} from '../../Redux/layout/layout';

export default function Criar(){

    // const [ produto, setProduto] = useState({nomeProduto:'',
    //                                     descProduto:'',
    //                                     quantidade:'',
    //                                     preco:'',
    //                                     categoria:'',
    //                                     tamanho:''})

    const [produto, setProduto] = useState();
    const dispatch = useDispatch();

    function handleImputChange(e){
        setProduto({...produto,[e.target.name]: e.target.value});
    }

    function onSubmit(e){
        e.preventDefault();

        dispatch(addBox(produto))

        setProduto({nomeProduto:'',
                    descProduto:'',
                    quantidade:'',
                    preco:'',
                    categoria:'',
                    tamanho:''})

        dispatch(showMessage());
        setTimeout(() => { dispatch(hideMessage()) }, 2500);

        // props.setProduto(props.produto.concat(produto));
    }
  
    return (
        <>
            <div id="Vender">
                <h1 className='Titulo'>Produtos</h1>
                <form onSubmit={onSubmit}  id="form_produto" className="Add_form">
                    <label>Nome do produto:</label>
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
 

