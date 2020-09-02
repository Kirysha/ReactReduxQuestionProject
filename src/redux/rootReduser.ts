import {combineReducers} from "redux"
import { testReducer } from "./testResucer"
import { listTestsReduser } from "./listTestsReduser"
export const rootReducer= combineReducers({
    test:testReducer,
    listTests:listTestsReduser
})