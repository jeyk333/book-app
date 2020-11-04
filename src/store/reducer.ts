import { combineReducers } from "redux";
import BooksReducer from "./getBooks/reducer";
const reducer = combineReducers({
  books: BooksReducer,
});
export default reducer;

export type RootState = ReturnType<typeof reducer>;
