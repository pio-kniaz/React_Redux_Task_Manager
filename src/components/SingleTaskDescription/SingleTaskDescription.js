import React from "react";
import { connect } from "react-redux";
const SingleTaskDescription = props => {
  const template = props.tasks.find(
    ({ id }) => id + "" === props.match.params.taskId
  );
  console.log(template, props);
  return <h1>{template.description}</h1>;
};
const mapStateToProps = state => {
  return {
     tasks: state.data.tasks
  };
};

export default connect(
  mapStateToProps,
  null
)(SingleTaskDescription);
