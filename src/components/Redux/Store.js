import { configureStore } from '@reduxjs/toolkit'
import boxReducer from './boxSlice'
import openBoxReducer from './openBoxSlice'

const store = configureStore({
    reducer:{
        box: boxReducer,
        openBox: openBoxReducer
    }
})

export default store