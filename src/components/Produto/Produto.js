import './Produto.css'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteBox, editBox, comprar } from '../Redux/boxSlice';

function Produto({produto}){

    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    function clickC(e){
        e.preventDefault();
        if(token != null){
            dispatch(comprar(produto));
            console.log(produto.id)
            window.location.href="/"
        }else{
            alert("Você precisa estar logado para poder comprar")
            window.location.href="/Login"
        }
    }

    return(
        <main>
        <div className="container">
            <div className="card" id="bordas">
                <div className="card-body ">
                    <div className="row ">
                        <div className="oofset-2 col-sm-12 col-md-12 col-lg-5  box-esq">
                            <img className="w-100 " src='Roupinhas.jpg' alt="Calça "/>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}

export default Produto