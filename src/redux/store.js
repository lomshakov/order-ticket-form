import {createStore, combineReducers, compose} from 'redux'
import passengerReducer from './passengerReducer'

const rootReducer = combineReducers({
    form: passengerReducer
})

/*const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))*/

/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */


// let store = createStore(rootReducer)

export default store