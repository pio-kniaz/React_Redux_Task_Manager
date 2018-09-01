import React from "react";
import Form from "../../components/Form/Form";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./List.css";
import { getTasks, deleteTask } from "../../actions/taskActions";
class List extends React.Component {
  componentDidMount() {
    this.props.getTasks();
  }
  render() {
    const { tasks, deleteTask } = this.props;
    let renderTask = null;
    if (tasks) {
      renderTask = tasks.map((elem, index) => {
        const DATE_OPTIONS = {
          year: "numeric",
          month: "short",
          day: "numeric"
        };
        let transformedDate = new Date(elem.date).toLocaleDateString(
          "en-US",
          DATE_OPTIONS
        );
        let style = null;
        let styleLink = null;
        switch (elem.done) {
          case true:
            style = {
              background: "white",
              color: "black"
            };
            break;
          default:
        }
        return (
          <div
            key={index}
            className="row d-flex justify-content-between align-items-center List__wrapper"
          >
            <div style={style} className="List__Box list-group-item col-sm-10">
              <NavLink
                className="List__Title"
                style={style}
                to={`/test/${elem.id}`}
              >
                {elem.category}
              </NavLink>

              <span className="List__date">{transformedDate}</span>
            </div>
            <div className="col-sm-2">
              <span
                onClick={deleteTask.bind(this, elem.id)}
                className="badge badge-primary badge-pill List__delete list-group-item"
              >
                Delete
              </span>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="List list-group List">
        {renderTask}
        <Form />
      </div>
    );
  }
}
List.propTypes = {
  tasks: PropTypes.array.isRequired,
  getTasks: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    tasks: state.data.tasks
  };
};
// const mapDispatchToProps = dispatch => ({
//   getTasks: () =>
//     dispatch({
//       type: GET_TASKS
//     })
// });
export default connect(
  mapStateToProps,
  { getTasks, deleteTask }
)(List);
