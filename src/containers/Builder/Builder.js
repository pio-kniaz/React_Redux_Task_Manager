import React from "react";
import "./Builder.css";
import List from "../../containers/List/List";
import SingleTaskDescription from "../../components/SingleTaskDescription/SingleTaskDescription";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class Builder extends React.Component {
  state = {
    tasks: []
  };
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={List} />
          <Route
            exact
            path={`/test/:taskId`}
            component={SingleTaskDescription}
          />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Builder;
