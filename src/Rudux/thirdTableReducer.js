import {types} from './types';

const initialState = {
    idThirdTable: null,
    thirdTable: [
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
};

function removePoint(state, id) {
    state.thirdTable.map((group) =>
        group.points = group.points.filter(point => point.id !== id));
    return state.thirdTable;
}

export const thirdTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ID_THIRD_TABLE:
            return {...state, idThirdTable: action.payload};

        case types.PUT_THIRD_TABLE:
            return {...state, thirdTable: action.payload};

        case types.DELETE_ROW_THIRD_TABLE:
            return {...state, thirdTable: removePoint(state, action.payload)};

        case types.CLEAR_SELECTED_ID_THIRD:
            return {...state, idThirdTable: null};

        default:
            return state;
    }
};
