import { createSlice } from '@reduxjs/toolkit'

function addBoxReducer(produtos, produto){
    let proxId = 1 + produtos.map(p => p.id).reduce((x,y) => Math.max(x,y));
    return produtos.concat([{...produto, id: proxId}]);
}

export const boxSlice = createSlice({
    name:'box',
    initialState: 'initialProduto',
       
    reducers: {
        addBox: (state , action) => addBoxReducer (state, action.payload)
    }       
})

export const { addBox } = boxSlice.actions
export default boxSlice.reducer