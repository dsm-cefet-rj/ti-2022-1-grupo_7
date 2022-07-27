import { useSelector } from "react-redux";
import Cadastro from "../components/Publico/Cadastro/Cadastro"

function Cadastrar(){
    
    const produto = useSelector(state=>state.box.produtos);

    return(
        <div>
            <Cadastro/>
        </div>
    )
}

export default Cadastrar