import Produto from "../components/Produto/Produto"

function ProdutoPag(){

    return(
        <div>
            <Produto 
                foto ={'CalcaVerde.jpg'} 
                preco = {'249,99'} 
                nomeProduto={'Calça Verde'} 
                categoria={'Calças'} 
                quantidade={1} 
                tamanho={'P'} 
                descProduto={'Calça verde feita de tecido resistente a chuvas, fogo e até mesmo sujeira, usada como uniforme em exercitos russos.'}/>
        </div>
    )
}

export default ProdutoPag