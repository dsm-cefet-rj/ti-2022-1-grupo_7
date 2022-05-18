import './Produto.css'

function Produto(){
    return(
        <main>
        <div class="container">
            <div class="card" id="borda">
                <div class="card-body ">
                    <div class="row ">
                        <div class="oofset-2 col-sm-12 col-md-12 col-lg-5  box-esq">
                            <img class="w-100 " src="CalcaVerde.jpg" alt="Calça "/>
                            <p class="preco">R$ <span class="bold">249,99</span></p>

                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-5 box-dir">
                            <h2 class="nome-produto">PRODUTO</h2>
                            <section class="descricao"/>
                                <p class="categoria">descrição do produto aqui... muita descrição msm,descrição do produto aqui... muita descrição msm,descrição do produto aqui... muita descrição msm,descrição do produto aqui... muita descrição msm,descrição do produto aqui...
                                    muita descrição msm</p>
                                <p class="categoria">Tamanho: <b>P</b></p>
                                <p class="categoria">Categoria: <b>Calça</b></p>
                                <p class="categoria">Quantidade: <b>6</b></p>
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