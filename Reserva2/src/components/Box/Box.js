import './Box.css'

function Box({nomeProduto, foto, descProduto}){

    return(
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <div class="card borda ">
                            <div class="card-body ">
                                <img class="w-100 " src={foto} alt="Calça "/>
                                <h2 class="mt-2 ">{nomeProduto}</h2>
                                <p>{descProduto}</p>
                                <button2 class="botao ">Comprar</button2>
                            </div>
                        </div>
                    </div>
    )
}

export default Box
