import {types} from './types';

const initialState = {
    idFirstTable: null,
    firstTable: [
        {
            id: 82,
            point: {
                x: '48.30',
                y: '32.18'
            },
            absX: 714,
            absY: 714,
            radius: 30,
            tag: 'Переробка'
        },
        {
            id: 83,
            point: {
                x: '48.30',
                y: '32.18'
            },
            absX: 814,
            absY: 312,
            radius: 25,
            tag: 'Переробка'
        },
        {
            id: 84,
            point: {
                x: '48.30',
                y: '32.18'
            },
            absX: 814,
            absY: 312,
            radius: 25,
            tag: 'Переробка'
        },
        {
            id: 85,
            point: {
                x: '48.30',
                y: '32.18'
            },
            absX: 814,
            absY: 312,
            radius: 25,
            tag: 'Переробка'
        },
        {
            id: 86,
            point: {
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


export const firstTableReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SET_ID_FIRST_TABLE:
            return {...state, idFirstTable: action.payload};

        case types.PUT_FIRST_TABLE:
            return {...state, firstTable: action.payload};

        case types.ADD_ROW_FIRST_TABLE:
            return {...state, firstTable: [...state.firstTable, action.payload]};

        case types.DELETE_ROW_FIRST_TABLE:
            return {...state, firstTable: state.firstTable.filter((curr) => curr.id !== action.payload)};

        case types.CLEAR_SELECTED_ID_FIRST:
            return {...state, idFirstTable: null};

        default:
            return state;
    }
};
