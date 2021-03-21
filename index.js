//console.log('From index.js');


// Action

const BUY_CAKE = 'BUY_CAKE'
{
    type: BUY_CAKE
    info: 'First Redux Action'
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