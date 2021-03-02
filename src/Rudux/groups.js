import {types} from "./types";

const initialState = {
  groups: [],
}

export const groupsReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.PUT_GROUPS:
      return {...state, groups: action.payload};

    default:
      return state;
  }
};
