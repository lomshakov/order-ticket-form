import { createStore, combineReducers } from 'redux'
import passengerReducer from './passengerReducer'

const rootReducer = combineReducers({
    form: passengerReducer
})

let store = createStore(rootReducer)

export default store