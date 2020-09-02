import React, { useState } from "react";
import SomeSelect from "../components/formQuestion/SomeSelect";
import OneSelect from "../components/formQuestion/OneSelect";
import Supplement from "../components/formQuestion/Supplement";
import { connect } from "react-redux";
import { createQuestion } from "../redux/actions";
import ViewQuestion from "../components/viewQuestion/viewQuestion";
import { iQuestion, typeQuestion } from "../redux/testResucer";
import { iTest } from "../redux/listTestsReduser";

interface iProps {
    tests:iTest[],  
  createQuestion?: Function;
}

interface iState {
}
class ListTests extends React.Component<iProps, iState> {
  constructor(props: any) {
    super(props);
    // this.state = {
    //   optionsState: typeQuestion.Select,
    // };
  }


  render() {
    return (
      <div className="container">
        <div className="list-group">
            {this.props.tests.map((value)=><button type="button" className="list-group-item list-group-item-action">
   {value.title}
  </button>)}
  
</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { tests: state.listTests.tests };
};

const mapDispatchToProps = {
  createQuestion,
};

export default connect(mapStateToProps,null)(ListTests);
