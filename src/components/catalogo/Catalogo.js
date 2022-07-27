import Box from "../Box/Box"
import BoxAdm from "../BoxAdm/BoxAdm"
import './catalogo.css'
import { useSelector } from "react-redux";

function Catalogo(){

    const produto = useSelector(state => state.box.produtos);

    return(
        <div>
            <div className="conteiner ">
                <div className="row g-5 p-5 " id="estrutura">
                    {produto.map((struct) => <Box produto={struct}/>)}
                </div>       
            </div>
        </div>
    )
}

export default Catalogo
