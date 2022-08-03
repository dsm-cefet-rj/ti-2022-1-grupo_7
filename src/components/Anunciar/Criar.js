import './Criar.css'
import React, { useState } from 'react';
import { addBox } from '../Redux/boxSlice';
import { useDispatch } from "react-redux";

export default function Criar() {

    const [produto, setProduto] = useState();
    const dispatch = useDispatch();

    function handleImputChange(e) {
        setProduto({ ...produto, [e.target.name]: e.target.value });
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(produto)
        dispatch(addBox(produto))

    }

    return (
        <>
            <div id="Vender">
                <h1 className='Titulo'>Produtos</h1>
                <form onSubmit={onSubmit} id="form_produto" className="Add_form">
                    {/* <div>
                        <form class="upload-imagem">
                            <input type="file" class="upload" required/>
                                <button>Alterar Imagem</button>
                        </form>

                        <div>
                            <img class="imagem" src="http://via.placeholder.com/350x150" alt="Sua imagem" width={350} height={150}/>
                        </div>
                    </div> */}
                    <label>Nome do produto:</label>
                    <input
                        type="text"
                        onChange={handleImputChange}
                        name="nomeProduto"
                        className="form-control"
                        placeholder="Nome"
                    />
                    <label>Descrição:</label>
                    <input
                        type="text"
                        onChange={handleImputChange}
                        name="descProduto"
                        className="form-control"
                        placeholder="Descrição do Produto"
                    />
                    <label>Quantidade:</label>
                    <input
                        type="number"
                        onChange={handleImputChange}
                        name="quantidade"
                        className="form-control"
                        placeholder="Defina a quantidade de peças"
                    />


                    <label>Valor:</label>
                    <input
                        type="text"
                        onChange={handleImputChange}
                        name="preco"
                        className="form-control"
                        placeholder="Preço do produto"
                    />


                    <label>Categoria:</label>
                    <select
                        onChange={handleImputChange}
                        name="categoria"
                    >
                        <option value="Calça">Calça</option>
                        <option value="Camisa">Camisa</option>
                        <option value="Jaqueta e Casacos">Jaqueta e Casacos</option>
                        <option value="Tenis">Tênis</option>
                    </select>

                    <label>Tamanho:</label>
                    <select
                        onChange={handleImputChange}
                        // onChange={(e) => props.setProduto(e.target.value)}
                        name="tamanho"
                    >
                        <option value="PP">PP</option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                        <option value="GG">GG</option>
                    </select>

                    <br></br>
                    <input type="submit" value="Anunciar" />

                </form>
            </div>
        </>
    );
};
// (function(){

//     //Pega os elementos da tela e declara como constantes
//     const leitorDeArquivos = new FileReader(),
//             formulario = document.querySelector('.upload-imagem'),
//             previaDaImagem = document.querySelector('.imagem'),
//             inputArquivo = document.querySelector('.upload'),
//             btnAtualiza = document.querySelector('.btnAtualiza');

    
//     function leEAtualiza(){
//         //pega o arquivo enviado e guarda nesta variavel
//         let imagemEnviada = inputArquivo.files[0];

//         //Usa a função do objeto leitor de arquivos, que lê o arquivo, e consegue reaproveita-lo para usar o arquivo como uma URL
//         leitorDeArquivos.readAsDataURL(imagemEnviada);
        
//         //Após leitura da imagem (evento load), a função de callback define o valor do src da imagem de prévia com o valor do resultado da leitura do leitor de arquivos
//         leitorDeArquivos.addEventListener('loadend', function(load){
            
//             //veja no console o que o resultado do leitor de arquivos :)
//             console.log(load.target.result);
//             //define o caminho da imagem com o caminho criado pelo leitor de arquivos
//             previaDaImagem.src = load.target.result
//         })
//     }

//     //Quando o formulário for enviado:
//     formulario.addEventListener('submit', function(submit){
//         //empede o recarregamento da página
//         submit.preventDefault();

//         leEAtualiza();
//     })

//     //Ou quando clica no boão atualizar
//     btnAtualiza.addEventListener('click', function(){
//         leEAtualiza();
//     })
    

// })()
