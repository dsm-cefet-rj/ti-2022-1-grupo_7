import Produto from "../components/Produto/Produto"
import Global from "../components/Global/Global"

function ProdutoPag(){

    return(
        <div>
            <Produto
                foto = {Global.foto} 
                preco = {Global.preco}
                nomeProduto={Global.nomeProduto} 
                categoria={Global.categoria} 
                quantidade = {Global.quantidade}
                tamanho={Global.tamanho}
                descProduto={Global.descProduto}/>
        </div>
    )
}

export default ProdutoPag