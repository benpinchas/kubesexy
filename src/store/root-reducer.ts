import { combineReducers } from 'redux'
import appStateReducer from "./app-state/app-state-reducer"
import resourceReducer from "./resource-state/resource-reducer"
import namespaceReducer from './namespace-state/namespace-reducer'

const rootReducer = combineReducers({
   appStateReducer,
   resourceReducer,
   namespaceReducer
})

export default rootReducer