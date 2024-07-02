import { createStore } from 'redux'
const INITIAL_VALUE={
    counter:4
}
const counterReducer = (store=INITIAL_VALUE,actions)=>{
    if(actions.type==='INCREMENT'){
        return {counter:store.counter+1}
    }
    else if(actions.type==='DECREMENT'){
        return {counter:store.counter-1}
    }
    else if(actions.type==='update'){
        return {counter:store.counter+actions.payload}
    }
    return store
}

const counterStore = createStore(counterReducer)

export default counterStore