import {combineReducers} from "redux"
import { testReducer } from "./testResucer"
export const rootReducer= combineReducers({
    test:testReducer
})