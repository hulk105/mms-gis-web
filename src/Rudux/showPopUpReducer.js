import { types } from './types';

const initialState = {
	showPopUp: false,
	section: '',
	error: false,
	showAddGroupPopUp: false,
	showRemoveGroupPopUp: false,
	selectedGroups: [],
};

export const showPopUpReducer = ( state = initialState, action ) => {
	switch (action.type) {
		case types.SHOW_POPUP:
			return { ...state, showPopUp: true, section: action.payload };

		case types.SHOW_ADD_GROUP_POP_UP:
			return {...state, showAddGroupPopUp: true, section: action.payload };

		case types.SHOW_CLOSE:
			return { ...state, showPopUp: false, error: false };

		case types.CLOSE_ADD_GROUP_POP_UP:
			return { ...state, showAddGroupPopUp: false, error: false };

		case types.SHOW_ERROR:
			return { ...state, error: true };

		case types.CLOSE_ERROR:
			return { ...state, error: false };

		case types.SHOW_REMOVE_GROUP_POP_UP:
			return {...state, showRemoveGroupPopUp: true, section: action.payload[0], selectedGroups: action.payload[1] };

		case types.CLOSE_REMOVE_GROUP_POP_UP:
			return {...state, showRemoveGroupPopUp: false, error: false };

		default:
			return state;
	}
};
