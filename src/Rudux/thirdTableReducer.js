import { types } from './types';

const initialState = {
	idThirdTable: null,
	thirdTable: [
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

export const thirdTableReducer = ( state = initialState, action ) => {
	switch (action.type) {
		case types.SET_ID_THIRD_TABLE:
			return { ...state, idThirdTable: action.payload };

		case types.PUT_THIRD_TABLE:
			return { ...state, thirdTable: action.payload };

		case types.CLEAR_SELECTED_ID_THIRD:
			return { ...state, idThirdTable: null };

		default:
			return state;
	}
};
