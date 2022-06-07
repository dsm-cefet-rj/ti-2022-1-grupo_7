import { configureStore } from '@reduxjs/toolkit'
import produtosReducer from './boxSlice';

export default configureStore({
    reducer:{
        produtos: produtosReducer
    }
})