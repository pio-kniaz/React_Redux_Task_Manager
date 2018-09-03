import React from "react";
import "./Builder.css";
import Dashboard from "../../containers/Dashboard/Dashboard";
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
          <Switch>
            <Route
              exact
              path={`/test/:taskId`}
              component={SingleTaskDescription}
            />
            <Route component={Dashboard} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Builder;
