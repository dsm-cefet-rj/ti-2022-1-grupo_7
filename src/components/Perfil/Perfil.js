import './Perfil.css'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addBox } from '../Redux/boxSlice';
import React, {useState} from 'react';

function Produto(){


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
    return(


        <main>
        <div className="container">
            <div className="card" id="borda">
                <p className="titulo">Login</p>
                <label className="texto">Email:</label>
                    <input 
                        type="email" 
                        onChange={handleImputChange}     
                        name="nome-produto" 
                        className="form-control" 
                        id="barra" 
                        placeholder="Exemplo@email.com"
                    />
                <label className="texto">Senha:</label>
                    <input 
                        type="password" 
                        onChange={handleImputChange}     
                        name="nome-produto" 
                        className="form-control"
                        id="barra"  
                        placeholder="Senha"
                    />
                    <input onClick={handleSubmit} type="submit" value="Logar"
                    className="botaos"/>

                    <a className="criar" >ainda não possui conta</a>
                    </div>
                </div>
        </main>
    )
}

export default Produto