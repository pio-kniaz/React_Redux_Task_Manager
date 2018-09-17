import React from "react";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addTask} from "../../actions/taskActions"
import uuid from 'uuid'
class Form extends React.Component {
	state={
		id:null,
		category:'',
		description:''
	}
	inputValueHandler=(event)=>{
		this.setState({
			[event.target.name]:event.target.value
		})
	}
	onSubmit=()=>{
		const newTask={
			category: this.state.category,
			id:uuid() ,
			done: false,
			date: new Date(),
			description: this.state.description
		}
		this.props.addTask(newTask);
		this.setState({
			id:null,
			category:'',
			description:''
		})
	}
  render() {
    const { addTask } = this.props;
    return (
      <form>
				<input value={this.state.category} name="category" onChange={this.inputValueHandler} type="text"/>
				<input value={this.state.description} name="description" onChange={this.inputValueHandler} type="text"/>
				<button
					onClick={this.onSubmit}
					type="button"
					className="btn btn-success Submit__btn"
				>
					Add Task
				</button>
      </form>
    );
  }
}
Form.propTypes={
	addTask:PropTypes.func.isRequired
}
export default connect(null,{addTask})(Form);
