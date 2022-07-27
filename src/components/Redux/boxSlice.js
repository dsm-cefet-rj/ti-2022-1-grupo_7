import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { httpGet, httpPost, httpDelete, httpPut } from './utils';
import store from './store'

const boxAdapter = createEntityAdapter();

const initialState = boxAdapter.getInitialState({
    status: "not_loaded",
    error: null
});

const baseUrl = 'http://localhost:3004/Banco';

export const fetchBanco = createAsyncThunk('database/fetchBanco', async() => {
    return await httpGet(`${baseUrl}/products`);
});

export const deleteBox = createAsyncThunk('database/deleteBox', async(idProduct) => {
    await httpDelete(`${baseUrl}/products/${idProduct}`);
    return idProduct;
});

export const addBox = createAsyncThunk('database/addBox', async(product) => {
    return await httpPost(`${baseUrl}/Banco`, product);
});

export const updateBox = createAsyncThunk('database/updateBox', async(product) => {
    return await httpPut(`${baseUrl}/Banco/${product.id}`, product);
})

export const openBox = createAsyncThunk('database/openBox', async(product, id) => {
    const filtro = product.filter((p) => `${baseUrl}/Banco/${p.id}` == id)
    return filtro;
})

export const boxSlice = createSlice({
    name: "products",
    initialState: initialState,
    extraReducers: {
        [fetchBanco.pending]: (state, action) => {state.status = "loading"},
        [fetchBanco.fulfilled]: (state, action) => {state.status = "loaded"; boxAdapter.setAll(state, action.payload);},
        [fetchBanco.rejected]: (state, action) => {state.status = "failed"; state.error = action.error.message},
        [deleteBox.pending]: (state, action) => {state.status = "loading"},
        [addBox.pending]: (state, action) => {state.status = "loading"},
        [updateBox.pending]: (state, action) => {state.status = "loading"},
        [deleteBox.fulfilled]: (state,{payload:id}) => {state.status = "deleted"; boxAdapter.removeOne(state, id);},
        [addBox.fulfilled]: (state, action) => {state.status = "saved"; boxAdapter.addOne(state, action.payload);},
        [updateBox.fulfilled]: (state, action) => {state.status = "saved"; boxAdapter.upsertOne(state, action.payload);},
        [openBox.fulfilled]: (state, action) => {state.status = "saved"; boxAdapter.upsertOne(state, action.payload);},
    }
})

export default boxSlice.reducer

export const {
    selectAll: selectAllProducts,
    selectById: selectProductsById,
    selectIds: selectProductsIds
} = boxAdapter.getSelectors(state => state.products)

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// const initialProduto = [];


//  function openBoxReducer(produtos, id){
//      const filtro = produtos.filter((p) => p.id == id)
//      return filtro;
//  }

// function addBoxReducer(produtos, produto){
//     let proxId = 1 + produtos.map(p => p.id).reduce((x,y) => Math.max(x,y));
//     return produtos.concat([{...produto, id: proxId}]);
// }

// function deleteBoxReducer(produtos, id){

//     return produtos.filter((p) => p.id !== id);
// }

// export const fetchBanco = createAsyncThunk('Banco/fetchBanco',
//     async () => {
//         return await (await fetch('http://localhost:3004/Banco')).json();
//     });

// function fullfillProjetosReducer(projetosState, projetosFetched){
//     return projetosFetched;
// }

// export const boxSlice = createSlice({
//     name:'box',
//     initialState: initialProduto,
       
//     reducers: {
//         openBox: (state, action) => openBoxReducer (state, action.payload),
//         addBox: (state , action) => addBoxReducer (state, action.payload),
//         deleteBox: (state, action) => deleteBoxReducer (state, action.payload)
//     },
//     extraReducers: {
//         [fetchBanco.fulfilled]: (state, action) => fullfillProjetosReducer(state, action.payload),
//     }

// })

// export const { addBox, deleteBox, openBox} = boxSlice.actions
// export default boxSlice.reducer

// import {createAsyncThunk, createSlice, createEntityAdapter} from '@reduxjs/toolkit';
// import { useDispatch } from "react-redux";

// const initialProduto = [];

// // const bookingsAdapter = createEntityAdapter()


// function openBoxReducer(produtos, id){
//     // const filtro = state.produtos.filter((p) => p.id == id);
//     const filtro = produtos;
//     return filtro;
// }

// function addBoxReducer(produtos, produto){
//     let proxId = 1 + produtos.map(p => p.id).reduce((x,y) => Math.max(x,y));
//     return produtos.concat([{...produto, id: proxId}]);
// }

// function deleteBoxReducer(produtos, id){
//     return produtos.filter((p) => p.id !== id);
// }

// export const fetchBanco = createAsyncThunk('Banco/fetchBanco',
//     async () => {
//         return await (await fetch('http://localhost:3004/Banco')).json();
// });

// function fullfillProjetosReducer(projetosState, projetosFetched) {
//     projetosState.status = 'loaded';
//     projetosState.produtos = projetosFetched;
// }

// export const boxSlice = createSlice({
//     name: 'box',
//     initialState: initialProduto,

//     reducers: {
//         openBox: (state, action) => openBoxReducer(state, action.payload),
//         addBox: (state, action) => addBoxReducer(state, action.payload),
//         deleteBox: (state, action) => deleteBoxReducer(state, action.payload)
//     },



//     extraReducers: {
//         [fetchBanco.fulfilled]: (state, action) => fullfillProjetosReducer(state, action.payload),
//         [fetchBanco.pending]: (state) => { state.status = 'loading' },
//         [fetchBanco.rejected]: (state, action) => { state.status = 'failed'; state.erro = action.erro.message }

//      }
//  })
// export const { addBox, deleteBox, openBox} = boxSlice.actions
// export default boxSlice.reducer

// export const {
//     selectAll : selectALLBookings,
//     selectById: selectBookingById,
//     selectEntities: selectBookingEntities,
//     selectTotal: selectBookingsTotal,
// } = bookingsAdapter.getSelectors(state=>state.bookings)