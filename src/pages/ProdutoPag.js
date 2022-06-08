import Produto from "../components/Produto/Produto"
import Global from "../components/Global/Global"
import { useSelector } from "react-redux";

function ProdutoPag(){

    const produto = useSelector(state=>state.box);

    return(
        <div>
            {produto.map((struct) => <Produto produto={struct}/>)}
        </div>
    )
}

export default ProdutoPag
