import React, { useState } from "react";
import { AddIcon } from "../icons/AddIcon";
import { iAnswer, typeQuestion } from "../../redux/testResucer";

const Supplement = ({createQuestion}) => {
  const [questionState, setQuestionState] = useState("");
  const [answerState, setAnswerState] = useState([{text:"", curentAnswer:true, id:0}] as Array<iAnswer>);

  const onClick = (event:any) => {
    event.preventDefault();
    createQuestion({title:questionState, answer:answerState, type: typeQuestion.Select})
  };

  const changeQustion = (event: any) => {
    setQuestionState(event.target.value);
  };

  const changeAnswer = (event: any) => {
    setAnswerState([{text:event.target.value, curentAnswer:true, id:0} as iAnswer]);
  };

  return (
    <samp>
      <input
        placeholder="Вопрос"
        type="text"
        className="form-control mt-1"
        name={`Question`}
        value={questionState}
        onChange={changeQustion}
      />
      <input
        placeholder="Ответ"
        type="text"
        className="form-control mt-1"
        name={`Answer`}
        value={answerState[0].text}
        onChange={changeAnswer}
      />
      <button
        type="submit"
        className="btn btn-primary row mt-1"
        onClick={onClick}
      >
        Добавить вопрос
      </button>
    </samp>
  );
};

export default Supplement;
