import './Produto.css'

function Produto({foto, preco, nomeProduto, descProduto, tamanho, categoria, quantidade}){
    return(
        <main>
        <div class="container">
            <div class="card" id="borda">
                <div class="card-body ">
                    <div class="row ">
                        <div class="oofset-2 col-sm-12 col-md-12 col-lg-5  box-esq">
                            <img class="w-100 " src={foto} alt="Calça "/>
                            <p class="preco">R$ <span class="bold">{preco}</span></p>

                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-5 box-dir">
                            <h2 class="nome-produto">{nomeProduto}</h2>
                            <section class="descricao"/>
                                <p class="categoria" id="texto">{descProduto}</p>
                                <p class="categoria">Tamanho: <b>{tamanho}</b></p>
                                <p class="categoria">Categoria: <b>{categoria}</b></p>
                                <p class="categoria">Quantidade: <b>{quantidade}</b></p>
                                <a href="#" class="botao">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}

export default Produto
