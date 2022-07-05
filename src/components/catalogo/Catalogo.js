import Box from "../Box/Box"
import BoxAdm from "../BoxAdm/BoxAdm"
import './catalogo.css'

function Catalogo({produto}){

    return(
        <div>
            <div class="conteiner ">
                <div class="row g-5 p-5 " id="estrutura">
                    {produto.map((struct) => <Box produto={struct}/>)}
                </div>       
            </div>
        </div>
    )
}

export default Catalogo
