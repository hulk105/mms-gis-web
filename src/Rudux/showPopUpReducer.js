import { types } from './types';

const initialState = {
	showPopUp: false,
	error: false
};


export const showPopUpReducer = ( state = initialState, action ) => {
	switch (action.type) {
		case types.SHOW_POPUP:
			return { ...state, showPopUp: true};

		case types.SHOW_CLOSE:
			return { ...state, showPopUp: false, error: false  };

		case types.SHOW_ERROR:
			return { ...state, error: true };

		case types.CLOSE_ERROR:
			return { ...state, error: false };

		default:
			return state;
	}
};
