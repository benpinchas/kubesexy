import { combineReducers } from 'redux'
import appStateReducer from "./app-state/app-state-reducer"
import resourceReducer from "./resource-state/resource-reducer"


const rootReducer = combineReducers({
   appStateReducer,
   resourceReducer
})

export default rootReducer