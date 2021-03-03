import {types} from './types';

const initialState = {
    idSecondTable: null,
    secondTable: [
        {
            id: 2,
            points: [
                {
                    id: 12,
                    x: '32.8',
                    y: '49.6'
                },
                {
                    id: 13,
                    x: '33',
                    y: '49.6'
                },
                {
                    id: 14,
                    x: '33',
                    y: '50'
                },
                {
                    id: 15,
                    x: '32.8',
                    y: '50'
                }
            ],
            tag: 'Переробка'
        },
        {
            id: 3,
            points: [
                {
                    id: 16,
                    x: '31.8',
                    y: '48.6'
                },
                {
                    id: 17,
                    x: '32',
                    y: '48.6'
                },
                {
                    id: 18,
                    x: '32',
                    y: '49'
                },
                {
                    id: 19,
                    x: '31.8',
                    y: '49'
                }
            ],
            tag: 'Викид вуглекислого газу'
        },
        {
            id: 4,
            points: [
                {
                    id: 20,
                    x: '30.8',
                    y: '47.6'
                },
                {
                    id: 21,
                    x: '31',
                    y: '47.6'
                },
                {
                    id: 22,
                    x: '31',
                    y: '48'
                },
                {
                    id: 23,
                    x: '30.8',
                    y: '48'
                }
            ],
            tag: 'Переробка'
        }
    ]
};

function removePoint(state, id) {
    state.secondTable.map((group) =>
        group.points = group.points.filter(point => point.id !== id));
    return state.secondTable;
}

export const secondTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ID_SECOND_TABLE:
            return {...state, idSecondTable: action.payload};

        case types.PUT_SECOND_TABLE:
            return {...state, secondTable: action.payload};

        case types.DELETE_ROW_SECOND_TABLE:
            return {...state, secondTable: removePoint(state, action.payload)};

        case types.CLEAR_SELECTED_ID_SECOND:
            return {...state, idSecondTable: null};
        default:
            return state;
    }
};
