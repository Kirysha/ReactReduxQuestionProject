import React, { useState } from "react";
import SomeSelect from "../components/formQuestion/SomeSelect";
import OneSelect from "../components/formQuestion/OneSelect";
import Supplement from "../components/formQuestion/Supplement";
import { connect } from "react-redux";
import { createQuestion } from "../redux/actions";
import ViewQuestion from "../components/viewQuestion/viewQuestion";

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

// const AddQuestion = () => {
//   const [optionsState, setOptionsState] = useState("select");
//   const [countResponse, setCountResponse] = useState("");
//   const [question, setquestion] = useState({} as iQuestion);

//   const changeOptionsState = (event: any) => {
//     setOptionsState(event.target.value);
//   };

//   const renderOptions = (optionsState: string, countResponse:string) => {

//     switch (optionsState) {
//       case "select": {
//         return(
//           <div className="col">
//             <input
//               id="countResponse"
//               className="form-control"
//               placeholder="Количество ответов"
//               value={countResponse}
//             />
//           </div>);
//       }
//       case "someSelect": {
//         return (
//             <div className="col">
//               <input
//                 id="countResponse"
//                 className="form-control"
//                 placeholder="Количество ответов"
//                 value={countResponse}
//               />
//             </div>
//         );
//       }
//       case "add": {
//       }
//     }
//   };
//   return (
//     <div className="card">
//       <div className="card-body">
//         <form>
//             <div className="row form-group mt-1">
//               <div className="col">
//                 <select
//                   value={optionsState}
//                   placeholder="Тип вопроса"
//                   onChange={changeOptionsState}
//                   className="form-control"
//                 >
//                   <option value="Select">Выбрать правильный варинт</option>
//                   <option value="Supplement">Дополнить</option>
//                   <option value="SelectMultiple">
//                     Выбрать несколько вариантов
//                   </option>
//                 </select>
//               </div>
//             </div>
//               {renderOptions(optionsState, countResponse)}
//           <button type="submit" className="btn btn-primary justify-content-end">
//             Добавить
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddQuestion;

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
