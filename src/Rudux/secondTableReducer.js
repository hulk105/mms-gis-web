import { types } from './types';

const initialState = {
	idSecondTable: null,
	secondTable: [
		{
			id: 12,
			point : {
				x: '32.8',
				y: '49.6'
			},
			tag: 'Переробка'
		},
		{
			id: 13,
			point : {
				x: '33',
				y: '49.6'
			},
			tag: 'Переробка'
		},
		{
			id: 14,
			point : {
				x: '33',
				y: '50'
			},
			tag: 'Переробка'
		},
		{
			id: 15,
			point : {
				x: '32.8',
				y: '50'
			},
			tag: 'Переробка'
		}
	]
};

export const secondTableReducer = ( state = initialState, action ) => {
	switch (action.type) {
		case types.SET_ID_SECOND_TABLE:
			return { ...state, idSecondTable: action.payload };

		case types.PUT_SECOND_TABLE:
			return { ...state, secondTable: action.payload };

		case types.CLEAR_SELECTED_ID_SECOND:
			return { ...state, idSecondTable: null };
		default:
			return state;
	}
};
