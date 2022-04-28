import{
    createStore, 
    combineReducers,
    applyMiddleware
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import  userReducer  from './Reducers/userReducers';
import petsReducers from './Reducers/petsReducers';

const Reducers = combineReducers({
    users: userReducer,
    pets: petsReducers,
    
})

const middleware = [thunk];

const store = createStore(
    Reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;