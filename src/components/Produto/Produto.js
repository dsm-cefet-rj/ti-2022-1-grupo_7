import './Produto.css'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Produto(props){


    return(
        <main>
        <div className="container">
            <div className="card" id="borda">
                <div className="card-body ">
                    <div className="row ">
                        <div className="oofset-2 col-sm-12 col-md-12 col-lg-5  box-esq">
                            <img className="w-100 " src='CalcaVerde.jpg' alt="Calça "/>
                            <p className="preco">R$ <span className="bold">{props.produto.preco}</span></p>

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 box-dir">
                            <h2 className="nome-produto">{props.produto.nomeProduto}</h2>
                            <section className="descricao"/>
                                <p className="categoria" id="texto">{props.produto.descProduto}</p>
                                <p className="categoria">Tamanho: <b>{props.produto.tamanho}</b></p>
                                <p className="categoria">Categoria: <b>{props.produto.categoria}</b></p>
                                <p className="categoria">Quantidade: <b>{props.produto.quantidade}</b></p>
                                <p className="categoria">id: <b>{props.produto.id}</b></p>
                                <a href="#" className="botao">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}

export default Produto