import './Perfil.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const res = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
                catch(err) {
                    console.log(err);
                }
            })
            
            const data = await res.json();
            const {token} = data;
            localStorage.setItem('token', token);
            if(token == undefined){
                alert("Usuario ou senha inválidos");
                token = null;
            }
            window.location.href = '/';            
        } catch(err) {
            console.log(err);
        }
    }

    

    return (

        <main>
            <div className="container">
                <div className="card" id="borda">
                    <p className="titulo">Login</p>
                    <label className="texto">Email:</label>
                    <input
                        type="email"
                        name="nome-produto"
                        className="form-control"
                        id="barra"
                        placeholder="Exemplo@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label className="texto">Senha:</label>
                    <input
                        type="password"
                        name="nome-produto"
                        className="form-control"
                        id="barra"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input onClick={handleSubmit} type="submit" value="Logar"
                        className="botaos" />

                    <Link className="criar" to="/Cadastrar" >
                        ainda não possui conta
                    </Link>

                </div>
            </div>
        </main>
    )
}

export default Login