import { createStore, combineReducers } from 'redux'
import { applyMiddleware } from 'redux'
import nomineeReducers from '../reducers/nomineeReducers'
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = createStore(combineReducers({
          nomineeData:nomineeReducers
    }), applyMiddleware(thunk))
    return store
}

export default configureStore