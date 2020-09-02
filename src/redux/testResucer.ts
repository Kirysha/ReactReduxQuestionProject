import { Action } from "redux"
import { CREATE_QUESTION } from "./types"

export interface iQuestion {
    id: number;
    type: typeQuestion;
    title: string;
    answer: iAnswer[];
  }
  
  export interface iAnswer {
    id: number;
    text: string;
    curentAnswer: boolean;
  }
  
  export enum typeQuestion {
    "Supplement" = "0",
    "Select" = "1",
    "SelectMultiple" = "2",
  }

const initialState = {
    question:[]
}

interface iAction {
    type:string,
    payload:iQuestion  
}

let idQuestion = -1;
export const testReducer = (state = initialState, action:iAction) => {
    switch(action.type) {
        case CREATE_QUESTION: {
            idQuestion++;            
            let question = action.payload
            question.id = idQuestion;
            return { ...state, question: [...state.question, question]}}
        default: return state
    }
}