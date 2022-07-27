// import { createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

// export const fetchBanco = createAsyncThunk('Banco/fetchBanco',
//     async () => {
//         return await (await fetch('http://localhost:3004/Banco')).json();
// });

// const bookingsAdapter = createEntityAdapter()

// export const boxSlice = createSlice({
//         name: 'box',
//         initialState: initialProduto,
    
//         reducers: {
//             addBox: (state, action) => addBoxReducer(state, action.payload),
//         }
//     })

// export default function reducer(state, action) {
//     if (action.type == 'ADD_BOX') {
//         return [ ...state, action.box ];
//     }
//     return state;
// }

// export const addBox = (box) => {
//     return {
//         type: 'ADD_BOX',
//         box
//     };
// };

