import './Box.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Global from '../Global/Global'

function Box(){

    return(
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="card borda ">
                            <div className="card-body ">
                                <img className="w-100 " src={Global.foto} alt="Roupa"/>
                                <h2 className="mt-2 ">{Global.nomeProduto}</h2>
                                <p>{Global.descProduto}</p>
                                <Link className="botao" to="/ProdutoPag">Comprar</Link>
                            </div>
                        </div>
                    </div>
    )
}

export default Box