import { MODAL_VISIBLE } from "../actions/types";
const initialState = {
  modalVisible:false
};
export default (state=initialState,action)=>{
	switch(action.type){
		case MODAL_VISIBLE:
		return{
			...state,
			modalVisible:!state.modalVisible
		}
		default:
		return state;
	}
}
