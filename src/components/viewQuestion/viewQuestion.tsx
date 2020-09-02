import React from "react";
import { iQuestion } from "../../redux/testResucer";
interface iProps {
  question: iQuestion;
}
const ViewQuestion = ({ question }: iProps) => {
  return (
    <div className="card">
      <h5 className="card-header">{question.title}</h5>
      <div className="card-body">
        {question.answer.map((value) => (
          <p key={value.id} className={value.curentAnswer? "card-text text-success" : "card-text"}>
            {value.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ViewQuestion;
