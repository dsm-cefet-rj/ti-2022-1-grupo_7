import { createSlice } from '@reduxjs/toolkit'

const initialProdutos = 
    [{
      id: 1,
      nomeProduto:'Calça Verde',
      descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
      tamanho:'P',
      categoria:'Calça',
      preco:'249.99'
    },
    {
      id: 2,
      nomeProduto:'Calça Verde',
      descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
      tamanho:'P',
      categoria:'Calça',
      preco:'249.99'
    },
    {
      id: 3,
      nomeProduto:'Calça Verde',
      descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
      tamanho:'P',
      categoria:'Calça',
      preco:'249.99'
    },
    {
      id: 4,
      nomeProduto:'Calça Verde',
      descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
      tamanho:'P',
      categoria:'Calça',
      preco:'249.99'
    },
    {
      id: 5,
      nomeProduto:'Calça Verde',
      descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
      tamanho:'P',
      categoria:'Calça',
      preco:'249.99'
    },
    {
      id: 6,
      nomeProduto:'Calça Verde',
      descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
      tamanho:'P',
      categoria:'Calça',
      preco:'249.99'
    },
    {
      id: 7,
      nomeProduto:'Calça Verde',
      descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
      tamanho:'P',
      categoria:'Calça',
      preco:'249.99'
    },
    {
      id: 8,
      nomeProduto:'Calça Verde',
      descProduto:'Calça muito verde, tão verde que se camufla em árvores de todo o deserto',
      tamanho:'P',
      categoria:'Calça',
      preco:'249.99'
    }];


function addBoxReducer(produtos, produto){
    let proxId = 1 + produtos.map(produto => produto.id).reduce((x, y) => Math.max(x,y));
    return produtos.concat([{...produto, id: proxId}]);
}


export const slice = createSlice({
    name:'box',
    intialState: initialProdutos,
    
    reducers: {
        addBox: (state, action) => addBoxReducer(state, action.payload),

        // openBox(id){
        //     return {...state, isLogged: false, name:''}
        // }
    }       
})

export const { createBox, addBox } = slice.actions
export const selectUser = state => state.user
export default slice.reducer