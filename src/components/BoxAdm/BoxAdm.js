import './BoxAdm.css'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function BoxAdm(){


    return(
        <main>
        <div className="container">
            <div className="card" id="bordas">
                <div className="card-body ">
                    <div className="row ">
                        <div className="oofset-2 col-sm-12 col-md-12 col-lg-5  box-esq">
                            <img className="w-100 " src='CalcaVerde.jpg' alt="Calça "/>
                            <p className="preco">R$ <span className="bold">250</span></p>

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 box-dir">
                            <h2 className="nome-produto">Calça Verde</h2>
                            <section className="descricao"/>
                                <p className="categoria" id="textos">Calaç muito verde mesmo</p>
                                <p className="categoria">Tamanho: <b>P</b></p>
                                <p className="categoria">Categoria: <b>Calça</b></p>
                                <p className="categoria">Quantidade: <b>4</b></p>
                                <p className="categoria">id: <b>2</b></p>
                                <a href="#" className="botao">Comprar</a>
                                <a href="#" className="botaol">Editar</a>
                                <a href="#" className="botaol">Excluir</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}


export default BoxAdm