import React, { useState } from "react";
import SomeSelect from "../components/formQuestion/SomeSelect";
import OneSelect from "../components/formQuestion/OneSelect";
import Supplement from "../components/formQuestion/Supplement";
import { connect } from "react-redux";
import { createQuestion } from "../redux/actions";
import ViewQuestion from "../components/viewQuestion/viewQuestion";
import { iQuestion, typeQuestion } from "../redux/testResucer";

interface iProps {
  question: iQuestion[];
  createQuestion?: Function;
}

interface iState {
  optionsState: typeQuestion;
}
class AddQuestionScreen extends React.Component<iProps, iState> {
  constructor(props: any) {
    super(props);
    this.state = {
      optionsState: typeQuestion.Select,
    };
  }

  createQuestion = (question: iQuestion) => {
    this.props.createQuestion && this.props.createQuestion(question);
  };

  changeOptionsState = (event: any) => {
    this.setState({ optionsState: event.target.value });
  };

  renderOptions = (optionsState: typeQuestion) => {
    switch (optionsState) {
      case typeQuestion.Select: {
        return <OneSelect createQuestion={this.createQuestion} />;
      }
      case typeQuestion.SelectMultiple: {
        return <SomeSelect createQuestion={this.createQuestion}/>;
      }
      case typeQuestion.Supplement: {
        return <Supplement createQuestion={this.createQuestion}/>;
      }
    }
  };

  render() {
    return (
      <div>
        {this.props.question.map((value) => <ViewQuestion key={value.id} question={value}/>)}
        <div className="card">
          <div className="card-body">
            <form>
              <div className="row form-group mt-1">
                <div className="col">
                  <select
                    value={this.state.optionsState}
                    placeholder="Тип вопроса"
                    onChange={this.changeOptionsState}
                    className="form-control"
                  >
                    <option value={typeQuestion.Select}>
                      Выбрать правильный варинт
                    </option>
                    <option value={typeQuestion.Supplement}>Дополнить</option>
                    <option value={typeQuestion.SelectMultiple}>
                      Выбрать несколько вариантов
                    </option>
                  </select>
                </div>
              </div>
              {this.renderOptions(this.state.optionsState)}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { question: state.test.question };
};

const mapDispatchToProps = {
  createQuestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestionScreen);
