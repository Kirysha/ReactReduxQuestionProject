import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AddQuestionScreen from "./AddQuestionScreen";

class MainScreen extends React.Component {
  render() {
    return (
        <Router>
      <div style={{ height: "100%" }} className="container-fluid">
        <div className="row justify-content-center">
          <div className="center btn btn-primary m-3">
            <Link className="text-white" to="/createTest">
              Создать новый тест
            </Link>
          </div>
          <div className="center btn btn-primary m-3">
            <Link className="text-white" to="/listTest">
              Список тестов
            </Link>
          </div>
        </div>
      </div>
      <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            <AddQuestionScreen />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default MainScreen;
