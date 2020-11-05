import {
  GET_BOOKS_LOADING,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  GET_AUTHOR_LOADING,
  GET_AUTHOR_SUCCESS,
  GET_AUTHOR_ERROR,
  RESET_DATA,
} from "./types";
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
    case GET_AUTHOR_LOADING:
      return {
        ...state,
        AuthorLoading: true,
        AuthorSuccess: false,
        AuthorError: false,
      };

    case GET_AUTHOR_SUCCESS:
      return {
        ...state,
        AuthorLoading: false,
        AuthorSuccess: true,
        AuthorError: false,
        Author: action.data,
      };

    case GET_AUTHOR_ERROR:
      return {
        ...state,
        AuthorLoading: false,
        AuthorSuccess: false,
        AuthorError: true,
      };

    case RESET_DATA:
      return {
        ...state,
        Loaing: false,
        Success: false,
        Error: false,
        Books: null,
      };

    default:
      return state;
  }
};

export default reducer;
