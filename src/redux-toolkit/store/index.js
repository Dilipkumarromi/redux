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
//video length--> 17.12.49
const privacySlice=createSlice({
    name:'privacy',
    initialState:{privacyVal:false},
    reducers:{
        togglePrivacy:(state,action)=>{
           return state.privacyVal=!state.privacyVal
        }
    }
})

const counterStore = configureStore({reducer:{
    counter:counterSlicers.reducer,
    privacy:privacySlice.reducer,  // add this line to combine the reducers from both slices into one state slice for your application.
}})

export const counterActions=counterSlicers.actions
export const privacyActions=privacySlice.actions
 
export default counterStore