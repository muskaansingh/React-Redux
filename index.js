//console.log('From index.js');

const redux = require('redux');
const createStore = redux.createStore;
//import {createStore} from 'redux';



// Action

const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}


// State

const initialState = {
    numOfCakes:10
}

// Reducers

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE : return {
            ...state ,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const store = createStore (reducer);

console.log('Initial State', store.getState());

// store.unSubscribe = store.subscribe(() => console.log('Updated State', store.getState()));

store.subscribe(() => console.log('Updated State', store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

// unSubscribe();