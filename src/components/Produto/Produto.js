import './Produto.css'

function Produto({foto, preco, nomeProduto, descProduto, tamanho, categoria, quantidade}){
    return(
        <main>
        <div className="container">
            <div className="card" id="borda">
                <div className="card-body ">
                    <div className="row ">
                        <div className="oofset-2 col-sm-12 col-md-12 col-lg-5  box-esq">
                            <img className="w-100 " src={foto} alt="Calça "/>
                            <p className="preco">R$ <span className="bold">{preco}</span></p>

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 box-dir">
                            <h2 className="nome-produto">{nomeProduto}</h2>
                            <section className="descricao"/>
                                <p className="categoria" id="texto">{descProduto}</p>
                                <p className="categoria">Tamanho: <b>{tamanho}</b></p>
                                <p className="categoria">Categoria: <b>{categoria}</b></p>
                                <p className="categoria">Quantidade: <b>{quantidade}</b></p>
                                <a href="#" className="botao">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}

export default Produto