import { Action } from "redux"
import { CREATE_QUESTION, ADD_TEST } from "./types"
import { iQuestion } from "./testResucer";

export interface iTest {
    id:number,
    title:string,
    questions:iQuestion[]
}

const initialState = {
    tests:[{
        id:1,
        title:"Первый тест",
        questions:[
            {
                id:1,
                title:"questions 1",
                answer: [{
                    id:1,
                    text:"ansver 1",
                    curentAnswer:false
                },
                {
                    id:2,
                    text:"ansver 12",
                    curentAnswer:false
                },
                {
                    id:3,
                    text:"ansver 13",
                    curentAnswer:true
                }]

            },
            {
                id:2,
                title:"questions 2",
                answer: [{
                    id:1,
                    text:"ansver 1",
                    curentAnswer:false
                },
                {
                    id:2,
                    text:"ansver 12",
                    curentAnswer:true
                },
                {
                    id:3,
                    text:"ansver 13",
                    curentAnswer:false
                }]

            }
        ]
    }] as iTest[]
}

interface iAction {
    type:string,
    payload:iTest
}

export const listTestsReduser = (state = initialState, action:iAction) => {
    switch(action.type) {
        case ADD_TEST: {
            return { ...state, tests: [...state.tests, action.payload]}}
        default: return state
    }
}