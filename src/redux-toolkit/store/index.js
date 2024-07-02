import {configureStore, createSlice} from '@reduxjs/toolkit'
// import { createStore } from 'redux'
// const INITIAL_VALUE={
//     counter:4
// }
const counterSlicers=createSlice({
    name:'counter',
    initialState:{counterVal:4},
    reducers:{
        increment:(state,action)=>{
            console.log('increment',state)
        },
        decrement:(state,acton)=>{
            console.log('decrement')
        },
        update:(state,action)=>{
            console.log('update')
        }
    }
})
// const counterReducer = (store=INITIAL_VALUE,actions)=>{
//     if(actions.type==='INCREMENT'){
//         return {counter:store.counter+1}
//     }
//     else if(actions.type==='DECREMENT'){
//         return {counter:store.counter-1}
//     }
//     else if(actions.type==='update'){
//         return {counter:store.counter+actions.payload}
//     }
//     return store
// }

// const counterStore = configureStore(counterReducer)

const counterStore = configureStore({reducer:{
    counter:counterSlicers.reducer,
}})


export const counterActions=counterSlicers.actions
// export default counterStore