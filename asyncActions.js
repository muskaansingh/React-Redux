// 5.1 initialize Redux Store
const redux = require('redux');
const createStore = redux.createStore;

// 6.1 Apply middleware
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;  // passing as a argument of applyMiddleware to redux-store


// 7. Import axios for getting data from the api
const axios = require('axios');

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

// 8 Final step: is to create "async action creator" (action creator returms an function instead of action object)

// special about this function is that it doesn't have to be pure, so it allows to have side effects such as async API calls. 
// This func also dispatches an actions, this is possible only bcz it receives dispatch method as argument
const fetchUsers = () => {
    return function(dispatch) {
        // before fire of API call, first dispatch fetchUsersRequest which sets the loading true!
        dispatch(fetchUsersRequest());
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                //response.data is the array of users
                const users = response.data
                // const users = response.data.map(user => user.id)  for getting only id of the user
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                //error.message
                dispatch(fetchUsersFailure(error.message))
            })
    }
}



// 5.2 Create Redux Store  6.2 passing as a second parameter of redux-store

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// 9. Finally subscribe to the store
store.subscribe(() => {console.log(store.getState())})

//10. dispatch async action creator
store.dispatch(fetchUsers());