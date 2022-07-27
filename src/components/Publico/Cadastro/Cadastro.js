import './Cadastro.css'
import React, {useState} from 'react';
import { addBox } from '../../Redux/boxSlice';
import { useDispatch } from "react-redux";

export default function Cadastro(){

    const [produto, setProduto] = useState();
    const dispatch = useDispatch();

    function handleImputChange(e){
        setProduto({...produto,[e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(addBox(produto))
        // props.setProduto(props.produto.concat(produto));
    }
  
    return (
        <main>
            <div className="container">
                <div className="card" id="borda">
                        <p className='titulo'>Casdastro</p>
                            <form></form>
                            <label className="texto">Nome:</label>
                            <input 
                                type="text" 
                                onChange={handleImputChange}     
                                name="nomeProduto" 
                                className="form-control"  
                                id="barra"
                                placeholder="Nome"
                            />
                            <label className="texto">Email:</label>
                            <input 
                                type="email" 
                                onChange={handleImputChange} 
                                name="descProduto" 
                                className="form-control"
                                id="barra" 
                                placeholder="Exemplo@email.com"
                                />
                            <label className="texto">Senha:</label>
                            <input 
                                type="password" 
                                onChange={handleImputChange} 
                                name="quantidade" 
                                className="form-control"
                                id="barra"
                                placeholder="Senha"
                            />
                            <input onClick={handleSubmit} type="submit" value="Cadastrar" className="botaos"/>
                            
                    </div>
                </div>
        </main>
    );
}
 

