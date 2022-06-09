import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import global from '../Global/Global'
const initialProduto =


// function openBoxReducer(produtos, id){
//     const filtro = produtos.filter((p) => p.id == id)
//     return filtro;
// }

function addBoxReducer(produtos, produto){
    let proxId = 1 + produtos.map(p => p.id).reduce((x,y) => Math.max(x,y));
    return produtos.concat([{...produto, id: proxId}]);
}

function deleteBoxReducer(produtos, id){

    return produtos.filter((p) => p.id !== id);
}

export const fetchBanco = createAsyncThunk('Banco/fetchBanco',
    async () => {
        return await (await fetch('hhtp://localhost:3004/Banco')).json();
    });

function fulfilledProjetosReducer(projetosState, projetosFetched){
    return projetosFetched;
}

export const boxSlice = createSlice({
    name:'box',
    initialState: initialProduto,
       
    reducers: {
        // openBox: (state, action) => openBoxReducer (state, action.payload),
        addBox: (state , action) => addBoxReducer (state, action.payload),
        deleteBox: (state, action) => deleteBoxReducer (state, action.payload)
    },
    extraReducers: {
        [fetchBanco.fulfilled]: (state, action) => fulfilledProjetosReducer(state, action.payload),
    }

})

export const { addBox, deleteBox} = boxSlice.actions
export default boxSlice.reducer