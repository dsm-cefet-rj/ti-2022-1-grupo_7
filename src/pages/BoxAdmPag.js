import { useSelector } from "react-redux";
import BoxAdm from "../components/BoxAdm/BoxAdm"

function BoxAdmPag(){
    
    const produto = useSelector(state=>state.box.produtoSelecionado);

    return(
        <div>
            {produto.map((struct) => <BoxAdm produto={struct}/>)}
        </div>
    )
}

export default BoxAdmPag