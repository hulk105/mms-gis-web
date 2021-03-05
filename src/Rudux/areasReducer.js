import {types} from './types';

const initialState = {
    showAreas: true
}

export const areasReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_AREAS:
            return {...state, showAreas: action.payload};

        default:
            return state;
    }
}
