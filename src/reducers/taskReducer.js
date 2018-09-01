import { GET_TASKS,DELETE_TASK,ADD_TASK } from "../actions/types";
const initialState = {
  tasks: [
    {
      category: "REDUX" + Math.floor(Math.random() * 51),
      id: 0,
      done: true,
      date: new Date(),
      description: "LoremLorem0"
    },
    {
      category: "Test REdux" + Math.floor(Math.random() * 51),
      id: 1,
      done: false,
      date: new Date(),
      description: "LoremLorem1"
    },
    {
      category: "TEst Redux" + Math.floor(Math.random() * 51),
      id: 2,
      done: false,
      date: new Date(),
      description: "LoremLorem2"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state
      };
      break;
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
    default:
      return state;
  }
};