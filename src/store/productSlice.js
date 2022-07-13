import { createSlice } from "@reduxjs/toolkit";



export const productSlice=createSlice({
name:'productAction',
initialState:{
    cardItem:[]
},
reducers:{
  addProduct:(state,action)=>{
    state.cardItem.push(action.payload)
}

}

})

export const {addProduct}=productSlice.actions
export default productSlice.reducer





