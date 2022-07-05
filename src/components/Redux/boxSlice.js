import {createAsyncThunk, createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import global from '../Global/Global'
import { useDispatch } from "react-redux";

const initialProduto = {
    status:'notloaded',
    produtos:[],
    erro:null
};

const bookingsAdapter = createEntityAdapter()


function openBoxReducer(state, id){
    // const filtro = state.produtos.filter((p) => p.id == id);
    const filtro = state.produtos;
    return filtro;
}

function addBoxReducer(state, produto){
    let proxId = 1 + state.produtos.map(p => p.id).reduce((x,y) => Math.max(x,y));
    return state.produtos.concat([{...produto, id: proxId}]);
}

function deleteBoxReducer(state, id){
    return state.produtos.filter((p) => p.id !== id);
}

export const fetchBanco = createAsyncThunk('Banco/fetchBanco',
    async () => {
        return await (await fetch('http://localhost:3004/Banco')).json();
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