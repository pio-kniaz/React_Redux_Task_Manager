import { GET_TASKS,DELETE_TASK,ADD_TASK,DONE_TASK } from "../actions/types";
const initialState = {
  tasks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
				tasks:action.payload
      };
		case DELETE_TASK:
		return{
			...state,
			tasks:state.tasks.filter((task)=>{
				return task.id !== action.payload
			})
		}
		case ADD_TASK:
		return{
			...state,
			tasks:[action.payload,...state.tasks]
		}
		case DONE_TASK:
		let newList = state.tasks.map((task, index) => {
			return task.id === action.payload
				? { ...task, done: !task.done }
				: task;
		});
		return {
			...state,
			tasks: newList
		};
    default:
      return state;
  }
};
