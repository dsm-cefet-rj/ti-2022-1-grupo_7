import './Box.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { openBox }  from '../Redux/boxSlice'
import { useDispatch } from "react-redux";


function Box(props){

    const dispatch = useDispatch();
    // const senha = props.produto.id; 

    function click(e){
        e.preventDefault();
        dispatch(openBox(props.produto.id));
    }
    

    return(
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="card borda ">
                            <div className="card-body ">
                                <img className="w-100 " src="CalcaVerde.jpg" alt="Roupa"/>
                                <h2 className="mt-2 ">{props.produto.nomeProduto}</h2>
                                <p>{props.produto.descProduto}</p>
                                <p>{props.produto.id}</p>
                                <a onClick={click}>
                                    <Link className="botao" to="/ProdutoPag" >
                                        Comprar
                                    </Link>
                                </a>
                            </div>
                        </div>
                    </div>
    )
}

export default Box
