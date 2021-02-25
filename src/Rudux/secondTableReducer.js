import { types } from './types';

const initialState = {
	idSecondTable: null,
	secondTable: [
		{
			id: 12,
			point : {
				x: '48.30',
				y: '32.18'
			},
			absX: 714,
			absY: 714,
			radius: 30,
			tag: 'Переробка'
		},
		{
			id: 13,
			point : {
				x: '48.30',
				y: '32.18'
			},
			absX: 814,
			absY: 312,
			radius: 25,
			tag: 'Переробка'
		},
		{
			id: 14,
			point : {
				x: '48.30',
				y: '32.18'
			},
			absX: 814,
			absY: 312,
			radius: 25,
			tag: 'Переробка'
		},
		{
			id: 15,
			point : {
				x: '48.30',
				y: '32.18'
			},
			absX: 814,
			absY: 312,
			radius: 25,
			tag: 'Переробка'
		},
		{
			id: 16,
			point : {
				x: '48.30',
				y: '32.18'
			},
			absX: 814,
			absY: 312,
			radius: 25,
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
