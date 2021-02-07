import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import passengerReducer from './passengerReducer'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    form: passengerReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store