import { configureStore } from '@reduxjs/toolkit'

import productReducer from './productSlice'


export const store=configureStore({
    reducer:{
      productAction:productReducer
    }
})

export default store
