import './BoxAdm.css'
import { useDispatch } from "react-redux";
// const { ObjectId } = require("mongodb");
// const { connectionDB } = require(".");
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { deleteBox, editBox, comprar } from '../Redux/boxSlice';

function BoxAdm({produto}){

    const dispatch = useDispatch();

    function clickA(e){
        e.preventDefault();
        dispatch(deleteBox(produto.id));
    }

    function clickE(e){
        e.preventDefault();
        dispatch(editBox(produto));
        console.log(produto.id)
    }

    function clickC(e){
        e.preventDefault();
        dispatch(comprar(produto));
        console.log(produto.id)
        window.location.href="/"
    }

    return(
        <main>
        <div className="container">
            <div className="card" id="bordas">
                <div className="card-body ">
                    <div className="row ">
                        <div className="oofset-2 col-sm-12 col-md-12 col-lg-5  box-esq">
                            <img className="w-100 " src='CalcaVerde.jpg' alt="Calça "/>
                            <p className="preco">R$ <span className="bold">{produto.preco}</span></p>

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 box-dir">
                            <h2 className="nome-produto">{produto.nomeProduto}</h2>
                            <section className="descricao"/>
                                <p className="categoria" id="textos">{produto.descProduto}</p>
                                <p className="categoria">Tamanho: <b>{produto.tamanho}</b></p>
                                <p className="categoria">Categoria: <b>{produto.categoria}</b></p>
                                <p className="categoria">Quantidade: <b>{produto.quantidade}</b></p>
                                <a href="#" className="botao" onClick={clickC}>Comprar</a>
                                <a onClick={clickE}>
                                    <Link to="/Editar" className="botaol">
                                        Editar
                                        </Link>
                                        </a>
                                <a href="#" className="botaol" 
                                onClick={clickA}
                                >Excluir</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}


export default BoxAdm