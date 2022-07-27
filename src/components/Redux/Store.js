import { configureStore } from '@reduxjs/toolkit'
import boxReducer from './boxSlice'

const store = configureStore({
    reducer:{
        box: boxReducer
    }
})

export default store

// import { configureStore } from '@reduxjs/toolkit'
// import boxSlice from './boxSlice'
// import openBox from './openBoxSlice'

// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

// const productsPersistConfig = {
//     key: 'products',
//     storage: storage,
//     stateReconciler: autoMergeLevel2
// }

// const store = configureStore({
//     reducer: {
//         box: persistReducer(productsPersistConfig, boxSlice)
//     }
// })

// export default store

// export const persistor = persistStore(store);
//import productsReducer from './BoxSlice';


// const store = configureStore({
//     reducer:{
//         box: boxSlice
//     }
// })

// export default store




