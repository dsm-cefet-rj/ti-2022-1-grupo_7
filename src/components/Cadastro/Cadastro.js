import './Cadastro.css'
import React, { useState } from 'react';

export default function Cadastro(){

    const [nome, setNome] = useState('');
    const [email , setEmail] = useState('');
    const [senha , setSenha] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        try {
            fetch('http://localhost:8080/login/Cadastrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    senha: senha
                })
            })
            window.location.href = '/login';
        }catch(err){
            console.log(err)
        }
    }
  
    return (
        <main>
            <div className="container">
                <div className="card" id="borda">
                        <p className='titulo'>Cadastro</p>
                            <form></form>
                            <label className="texto">Nome:</label>
                            <input 
                                type="text" 
                                onChange={(e) => setNome(e.target.value)}  
                                id="barra" 
                                className="form-control"  
                                placeholder="Nome"
                                value={nome}
                                name="nome"
                            />
                            <label className="texto">Email:</label>
                            <input 
                                type="email" 
                                placeholder="Exemplo@email.com"
                                onChange={(e) => setEmail(e.target.value)}
                                id="barra" 
                                className="form-control"
                                value={email}
                                />
                            <label className="texto">Senha:</label>
                            <input 
                                type="password" 
                                placeholder="Senha"
                                onChange={(e) => setSenha(e.target.value)}
                                id="barra" 
                                className="form-control"
                                value={senha}
                            />
                            <input onClick={handleSubmit} type="submit" value="Cadastrar" className="botaos"/>
                            
                    </div>
                </div>
        </main>
    );
}
 

