import { ActionTypes } from "../constant/action-types";
const intialState = {
  movies: [],
};

export const moviesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MOVIES:
      return { ...state, movies: payload };
    default:
      return state;
  }
};