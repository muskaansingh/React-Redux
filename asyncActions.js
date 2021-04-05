// 5.1 initialize Redux Store
const redux = require('redux');
const createStore = redux.createStore;




// 1. initialize the state
const initialState = {
    loading:false,
    users: [],
    error: ''
}

//2. Create Actions

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

//3. Create Action Creators

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//4. Create Reducer

const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading:true
        }
        case FETCH_USERS_SUCCESS: return {
            loading:false,
            users: action.payload,
            error:' '
        }
        case FETCH_USERS_FAILURE: return {
            loading:false,
            users:[],
            error: action.payload
        }
    }
}

// 5.2 Create Redux Store

const store = createStore(store);