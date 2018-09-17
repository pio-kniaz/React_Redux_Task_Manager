import React from "react";
import "./Modal.css";
import { connect } from "react-redux";
import { modalHandler } from "../../actions/modalActions";
import Form from "../Form/Form"
const Modal = props => {
  const modal = (
    <div className="Modal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              onClick={props.modalHandler}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
           	<Form/>
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <React.Fragment>
      {props.modal ? (
        modal
      ) : (
				<div className="Modal__btn">
        <button className="btn btn-primary" onClick={props.modalHandler}>Add Task</button>
			</div>
      )}
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
    modal: state.modal.modalVisible
  };
};
export default connect(
  mapStateToProps,
  { modalHandler }
)(Modal);
