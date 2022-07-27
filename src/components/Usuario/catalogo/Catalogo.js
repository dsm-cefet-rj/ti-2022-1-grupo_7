import Box from "../Box/Box"
import { useSelector } from "react-redux"
import './catalogo.css'


function Catalogo({produto}){

    //const boxs = useSelector((state) => state.box);

    return(
        <div>
            <div className="conteiner ">
                <div className="row g-5 p-5 " id="estrutura">
                    {produto.map((struct) => <Box boxs={struct}/>)}
                </div>       
            </div>
        </div>
    )
}

export default Catalogo
