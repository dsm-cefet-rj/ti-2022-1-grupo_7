import { useSelector } from "react-redux";
import Perfil from "../components/Publico/Perfil/Perfil"

function Login(){
    
    const produto = useSelector(state=>state.box.produtos);

    return(
        <div>
            <Perfil />
        </div>
    )
}

export default Login