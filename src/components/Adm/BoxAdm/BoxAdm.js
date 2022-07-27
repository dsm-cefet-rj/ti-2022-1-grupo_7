import './BoxAdm.css'
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { deleteBox }  from '../../Redux/boxSlice'

function BoxAdm(props){

    const dispatch = useDispatch();

    function click(e){
        e.preventDefault();
        dispatch(deleteBox(props.produto.id));
    }

    return(
        <main>
        <div className="container">
            <div className="card" id="bordas">
                <div className="card-body ">
                    <div className="row ">
                        <div className="oofset-2 col-sm-12 col-md-12 col-lg-5  box-esq">
                            <img className="w-100 " src='CalcaVerde.jpg' alt="Calça "/>
                            <p className="preco">R$ <span className="bold">{props.preco}</span></p>

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 box-dir">
                            <h2 className="nome-produto">{props.nomeProduto}</h2>
                            <section className="descricao"/>
                                <p className="categoria" id="textos">{props.descProduto}</p>
                                <p className="categoria">Tamanho: <b>{props.tamanho}</b></p>
                                <p className="categoria">Categoria: <b>{props.categoria}</b></p>
                                <p className="categoria">Quantidade: <b>{props.quantidade}</b></p>
                                <p className="categoria">id: <b>2</b></p>
                                <a href="#" className="botao">Comprar</a>
                                <a href="#" className="botaol">Editar</a>
                                <a href="#" onClick={click} className="botaol">Excluir</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}


export default BoxAdm