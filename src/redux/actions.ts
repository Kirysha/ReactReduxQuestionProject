import { CREATE_QUESTION } from "./types";

export function createQuestion(question:any) {
    return {
        type:CREATE_QUESTION,
        payload:question
    }
}