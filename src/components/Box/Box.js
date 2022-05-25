import './Box.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Box(){

    return(
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="card borda ">
                            <div className="card-body ">
                                <img className="w-100 " src="CalcaVerde.jpg " alt="Calça "/>
                                <h2 className="mt-2 ">Item 1</h2>
                                <p>Mt texto textinho ms piui piui Mt texto textinho ms piui piui Mt texto textinho ms piui piui Mt texto textinho ms piui piui Mt texto textinho ms piui piui </p>
                                <Link className="botao" to="/ProdutoPag">Comprar</Link>
                            </div>
                        </div>
                    </div>
    )
}

export default Box