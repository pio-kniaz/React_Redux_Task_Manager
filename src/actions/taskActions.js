import { GET_TASKS, DELETE_TASK, ADD_TASK, DONE_TASK,MODAL_VISIBLE } from "./types";
import axios from "axios";
export const getTasks = () => async dispatch => {
  const res = await axios.get(
    "https://contact-702be.firebaseio.com/Tasks.json"
  );
  let tasksFromFireBase = [];
  for (var variable in res.data) {
    tasksFromFireBase.push(res.data[variable]);
  }
  dispatch({
    type: GET_TASKS,
    payload: tasksFromFireBase
  });
};
export const deleteTask = id => {
  return {
    type: DELETE_TASK,
    payload: id
  };
};

export const addTask = newTask => async dispatch=>{
	await axios.post('https://contact-702be.firebaseio.com/Tasks.json',newTask)
  dispatch ({
    type: ADD_TASK,
    payload: newTask
  });
};

export const doneTask = taskId => {
  return {
    type: DONE_TASK,
    payload: taskId
  };
};
