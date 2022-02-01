import { combineReducers } from 'redux'
import appStateReducer from "./app-state/app-state-reducer"
import resourceReducer from "./resource-state/resource-reducer"
import namespaceReducer from './namespace-state/namespace-reducer'
import tabsReducer from "./tabs-state/tabs-state-reducer"

const rootReducer = combineReducers({
   appStateReducer,
   resourceReducer,
   namespaceReducer,
   tabsReducer
})

export default rootReducer