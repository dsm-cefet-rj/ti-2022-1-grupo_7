import Produto from "../components/Produto/Produto"
import Global from "../components/Global/Global"

function ProdutoPag({preco, nomeProduto, descProduto, tamanho, categoria, quantidade}){

    return(
        <div>
            <Produto
                foto = {Global.foto} 
                preco = {preco}
                nomeProduto={nomeProduto} 
                categoria={categoria} 
                quantidade = {quantidade}
                tamanho={tamanho}
                descProduto={descProduto}/>
        </div>
    )
}

export default ProdutoPag