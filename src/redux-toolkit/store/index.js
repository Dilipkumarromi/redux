import {configureStore, createSlice} from '@reduxjs/toolkit'
const counterSlicers=createSlice({
    name:'counter',
    initialState:{counterVal:0},
    reducers:{
        increment:(state,action)=>{
          state.counterVal++
        },
        decrement:(state,acton)=>{
            state.counterVal--
        },
        update:(state,action)=>{
            console.log('update',action.payload.payload)
            state.counterVal=action.payload.payload
        }
    }
})

const counterStore = configureStore({reducer:{
    counter:counterSlicers.reducer,
}})

export const counterActions=counterSlicers.actions
 
export default counterStore