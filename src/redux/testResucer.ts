import { Action } from "redux"
import { CREATE_QUESTION } from "./types"

const initialState = {
    question:[]
}

let idQuestion = -1;
export const testReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case CREATE_QUESTION: {
            idQuestion++;            
            let question = action.payload
            question.id = idQuestion;
            return { ...state, question: [...state.question, question]}}
        default: return state
    }
}