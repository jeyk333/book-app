import { GET_BOOKS_LOADING, GET_BOOKS_SUCCESS, GET_BOOKS_ERROR } from "./types";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_LOADING:
      return {
        ...state,
        Loading: true,
        Success: false,
        Error: false,
      };

    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        Loading: false,
        Success: true,
        Error: false,
        Books: action.data,
      };

    case GET_BOOKS_ERROR:
      return {
        ...state,
        Loading: false,
        Success: false,
        Error: true,
      };

    default:
      return state;
  }
};

export default reducer;
