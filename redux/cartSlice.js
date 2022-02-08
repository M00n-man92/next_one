import {createSlice} from '@reduxjs/toolkit'
const slice=createSlice({
    name:"cart",
    initialState:{
        product:[],
        quantity:0,
        
        total:0
    },
    reducers:{
        addProduct:(state,action)=>{
            state.product.push(action.payload);
            state.quantity+=1;
            state.total+=action.payload.itemPrice*action.payload.quantity; 

        },
        reset:(state)=>{
            state.product=[];
            state.quantity=0;
            state.total=0;
        }
    }

})
export default slice.reducer
export const {addProduct, reset}=slice.actions