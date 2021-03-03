import {types} from './types';

const initialState = {
    idFirstTable: null,
    firstTable: [
        {
            id: 1,
            points: [
                {
                    id: 82,
                    x: '48.30',
                    y: '32.18'
                },
                {
                    id: 83,
                    x: '48.30',
                    y: '32.18'
                },
                {
                    id: 84,
                    x: '48.30',
                    y: '32.18'
                },
                {
                    id: 85,
                    x: '48.30',
                    y: '32.18'
                },
                {
                    id: 86,
                    x: '48.30',
                    y: '32.18'
                }],
            tag: 'Переробка'
        }]
}

function removePoint(state, id) {
    state.firstTable.map((group) =>
        group.points = group.points.filter(point => point.id !== id));
    return state.firstTable;
}

export const firstTableReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SET_ID_FIRST_TABLE:
            return {...state, idFirstTable: action.payload};

        case types.PUT_FIRST_TABLE:
            return {...state, firstTable: action.payload};

        case types.ADD_ROW_FIRST_TABLE:
            return {...state, firstTable: [...state.firstTable, action.payload]};

        case types.DELETE_ROW_FIRST_TABLE:
            return {...state, firstTable: removePoint(state, action.payload)};

        case types.CLEAR_SELECTED_ID_FIRST:
            return {...state, idFirstTable: null};

        default:
            return state;
    }
};
