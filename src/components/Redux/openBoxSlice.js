import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from "react-redux";

const initialProduto2 = [{
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

function openBoxReducer(produtos, id){
    const filtro = produtos.filter((p) => p.id == id)
    return filtro;
}

export const openBoxSlice = createSlice({
    name:'openBox',
    initialState: initialProduto2,
       
    reducers: {
        openBox: (state, action) => openBoxReducer (state,action.payload)
    }       
})

export const { openBox } = openBoxSlice.actions
export default openBoxSlice.reducer