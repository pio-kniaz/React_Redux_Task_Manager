import React from "react";
import Form from "../../components/Form/Form";
import Modal from "../../components/Modal/Modal";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Dashboard.css";
import { getTasks, deleteTask, doneTask } from "../../actions/taskActions";
class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getTasks();
  }
  render() {
    const { tasks, deleteTask, doneTask } = this.props;
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
        let active = null;
        switch (elem.done) {
          case true:
            style = "done";
            active = "active";
            break;
          default:
        }
        return (
          <div className="col" key={index}>
            <div className={`card mb-3 ${style}`}>
              <h3 className="card-header"> {elem.category}</h3>
              <div className="card-body">
                <h5 className="card-title">{elem.description}</h5>
              </div>
              <img
                className="img-fluid"
                src="https://jelvix.com/images/blog/5a58d2b2bbd4b.jpg"
                alt="Card image"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="card-body">
                <NavLink className="card-link" to={`/test/${elem.id}`}>
                  Description
                </NavLink>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
              <div className="card-footer text-muted">
                <span className="List__time">{transformedDate}</span>
                <button
                  onClick={deleteTask.bind(this, elem.id)}
                  type="button"
                  className="btn btn-outline-danger"
                >
                  Danger
                </button>
                <button
                  onClick={doneTask.bind(this, elem.id)}
                  type="button"
                  className="btn btn-outline-success"
                >
                  Done
                </button>
              </div>
            </div>
            <div className={`back-button ${active}`}>
              <button
                onClick={doneTask.bind(this, elem.id)}
                type="button"
                className="btn btn-outline-success btn-bg"
              >
                <i className="fas fa-check" />
              </button>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="Dashboard row">
        {renderTask}
				<Modal/>
        {/* <Form /> */}
      </div>
    );
  }
}
Dashboard.propTypes = {
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
  { getTasks, deleteTask, doneTask }
)(Dashboard);
