import Box from "../Box/Box"
import './catalogo.css'
import Global from '../Global/Global'

function Catalogo(){
    return(
        <div>
            <div class="conteiner ">
                <div class="row g-5 p-5 " id="estrutura">
                    <Box
                        foto = {Global.foto} 
                        nomeProduto={Global.nomeProduto} 
                        descProduto={Global.descProduto}/>
                    <Box
                        foto = {Global.foto} 
                        nomeProduto={Global.nomeProduto} 
                        descProduto={Global.descProduto}/>
                    <Box
                        foto = {Global.foto} 
                        nomeProduto={Global.nomeProduto} 
                        descProduto={Global.descProduto}/>
                    <Box
                        foto = {Global.foto} 
                        nomeProduto={Global.nomeProduto} 
                        descProduto={Global.descProduto}/>
                    <Box
                        foto = {Global.foto} 
                        nomeProduto={Global.nomeProduto} 
                        descProduto={Global.descProduto}/>
                    <Box
                        foto = {Global.foto} 
                        nomeProduto={Global.nomeProduto} 
                        descProduto={Global.descProduto}/>
                    <Box
                        foto = {Global.foto} 
                        nomeProduto={Global.nomeProduto} 
                        descProduto={Global.descProduto}/>
                    <Box
                        foto = {Global.foto} 
                        nomeProduto={Global.nomeProduto} 
                        descProduto={Global.descProduto}/>
                    <Box
                        foto = {Global.foto} 
                        nomeProduto={Global.nomeProduto} 
                        descProduto={Global.descProduto}/>
                </div>       
            </div>
        </div>
    )
}

export default Catalogo