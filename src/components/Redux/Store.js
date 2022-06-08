import { configureStore } from '@reduxjs/toolkit'
import boxReducer from './boxSlice'

const store = configureStore({
    reducer:{
        box: boxReducer
    }
})

export default store