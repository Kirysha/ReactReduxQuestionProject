import React, { useState } from "react";
import { AddIcon } from "../icons/AddIcon";
import { iAnswer, typeQuestion } from "../../screens/AddQuestionScreen";

let idAnswer = 0;
const SomeSelect = ({createQuestion}) => {
  const [questionState, setQuestionState] = useState("");
  const [answerState, setAnswerState] = useState([
    { id: 0, curentAnswer: false, text: "" },
  ] as Array<iAnswer>);

  const changeСountResponseState = (event: any) => {
    event.preventDefault();
    idAnswer++;
    const value = answerState.concat([
      { id: idAnswer, curentAnswer: false, text: "" },
    ]);
    setAnswerState(value);
  };

  const onClick = (event:any) => {
    event.preventDefault();
    createQuestion({title:questionState, answer:answerState, type: typeQuestion.Select})
  };

  const changeAnswer = (event: any) => {
    const name = event.target.name;
    const newValue = answerState.map((value) => {
      if (`Ansver${value.id}` == name) {
        return {
          id: value.id,
          curentAnswer: value.curentAnswer,
          text: event.target.value,
        } as iAnswer;
      }
      if (`CheckBox${value.id}` == name) {
        return {
          id: value.id,
          curentAnswer: event.target.checked,
          text: value.text,
        } as iAnswer;
      }
      return value;
    });
    setAnswerState(newValue);
  };

  const changeQustion = (event:any) => {
    setQuestionState(event.target.value)
  }

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
      {answerState.map((value) => (
        <div key={value.id} className="input-group mt-1">
            <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="checkbox"
              className="checkbox-light "
              name={`CheckBox${value.id}`}
              checked={value.curentAnswer}
              onChange={changeAnswer}
            />
          </div></div>
          <input
          placeholder="Ответ"
            type="text"
            className="form-control"
            name={`Ansver${value.id}`}
            value={value.text}
            onChange={changeAnswer}
          />
        </div>
      ))}
      {answerState.length <= 10 && <div className="row justify-content-center mt-1">
        <button className="btn m-1" onClick={changeСountResponseState}>
          <AddIcon />
        </button>
        </div>}
        
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

export default SomeSelect;
