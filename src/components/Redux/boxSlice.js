import {createAsyncThunk, createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import global from '../Global/Global'
import { useDispatch } from "react-redux";

const initialProduto = {
    status:'notloaded',
    produtos:[],
    produtoSelecionado:[],
    erro:null
};

const bookingsAdapter = createEntityAdapter()


function openBoxReducer(state, id){
    state.produtoSelecionado = state.produtos.filter((p) => p.id == id);
}

function addBoxReducer(state, produto){
    let proxId = 1 + state.produtos.map(p => p.id).reduce((x,y) => Math.max(x,y));
    //state.produtos = state.produtos.concat([{...produto, id: proxId}]);
    fetch("http://localhost:8080/produtos/add", {
        method: "POST",
        body: JSON.stringify({...produto, id: proxId}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
    window.location.href = "/";
}

function deleteBoxReducer(state, id){
    return state.produtos.filter((p) => p.id !== id);
}

export const fetchBanco = createAsyncThunk('Banco/fetchBanco',
    async () => {
        return await (await fetch('http://localhost:8080/produtos')).json();
});

function fullfillProjetosReducer(projetosState, projetosFetched) {
    projetosState.status = 'loaded';
    projetosState.produtos = projetosFetched;
}

export const boxSlice = createSlice({
    name: 'box',
    initialState: initialProduto,

    reducers: {
        openBox: (state, action) => openBoxReducer(state, action.payload),
        addBox: (state, action) => addBoxReducer(state, action.payload),
        deleteBox: (state, action) => deleteBoxReducer(state, action.payload)
    },
    extraReducers: {
        [fetchBanco.fulfilled]: (state, action) => fullfillProjetosReducer(state, action.payload),
        [fetchBanco.pending]: (state) => { state.status = 'loading' },
        [fetchBanco.rejected]: (state, action) => { state.status = 'failed'; state.erro = action.erro.message }

    }

})
export const { addBox, deleteBox, openBox} = boxSlice.actions
export default boxSlice.reducer

export const {
    selectAll : selectALLBookings,
    selectById: selectBookingById,
    selectEntities: selectBookingEntities,
    selectTotal: selectBookingsTotal,
} = bookingsAdapter.getSelectors(state=>state.bookings)