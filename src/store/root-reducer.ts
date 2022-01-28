import { combineReducers } from 'redux'
import podReducer from './pod/pod-reducer'
import appStateReducer from "./app-state/app-state-reducer"

const rootReducer = combineReducers({
   podReducer,
   appStateReducer
})

export default rootReducer