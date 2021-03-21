//console.log('From index.js');

const redux = require('redux');
const createStore = redux.createStore;
//import {createStore} from 'redux';
const combineReducers = redux.combineReducers;  // combines multiple reducers into one!



// Action

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}


function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: 'First Redux Action'
    }
}


// State

// const initialState = {
//     numOfCakes:10,
//     numOfIcecream:20
// }

const initialCakeState = {
    numOfCakes:10
}

const initialIcecreamState = {
    numOfIcecream:20
}




// Reducers

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE : return {
//             ...state ,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM : return {
//             ...state ,
//             numOfIcecream: state.numOfIcecream - 1
//         }
//         default: return state
//     }
// }


const CakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE : return {
            ...state ,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const IcecreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM : return {
            ...state ,
            numOfIcecream: state.numOfIcecream - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: CakeReducer,
    icecream: IcecreamReducer
})

const store = createStore (rootReducer);

console.log('Initial State', store.getState());

// store.unSubscribe = store.subscribe(() => console.log('Updated State', store.getState()));

store.subscribe(() => console.log('Updated State', store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

// unSubscribe();