import './Box.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { openBox }  from '../Redux/boxSlice'
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from 'react'


function Box(props){

    const dispatch = useDispatch(); 
    const token = localStorage.getItem('token');
    const [userType, setUserType] = useState("");
    
    function click(e){
        
        e.preventDefault();
        dispatch(openBox(props.produto.id));
        // if(userType == "adm"){
        //     window.location.href = "/BoxAdmPag";
        // }else{
        //     window.location.href = "/ProdutoPag";
        // }
    }
        
        useEffect(() => {
            if (token) {
                const tokenData = JSON.parse(atob(token.split(".")[1]));
                setUserType(tokenData.tipo);
            }
        })
        
    

    return(
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="card borda ">
                            <div className="card-body ">
                                <img className="w-100 " src="Roupinhas.jpg" alt="Roupa"/>
                                <h2 className="mt-2 ">{props.produto.nomeProduto}</h2>
                                <p>{props.produto.descProduto}</p>
                                <a onClick={click}>
                                    <Link className="botao" 
                                    to={userType == "adm" ? "/BoxAdmPag" : "/ProdutoPag"} >
                                        Comprar
                                    </Link>
                                </a>
                            </div>
                        </div>
                    </div>
    )
}
{/* <Link className="botao" to={`/ProdutoPag/${props.produto.id}`} ></Link> */}

export default Box
