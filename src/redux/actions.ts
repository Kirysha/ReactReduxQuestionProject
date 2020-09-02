import { CREATE_QUESTION, ADD_TEST } from "./types";
import { iTest } from "./listTestsReduser";
import { iQuestion } from "./testResucer";

export function createQuestion(question:iQuestion) {
    return {
        type:CREATE_QUESTION,
        payload:question
    }
}

export function addTest(test:iTest) {
    return {
        type:ADD_TEST,
        payload:test
    }
}