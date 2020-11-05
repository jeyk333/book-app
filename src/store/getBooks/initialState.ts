type MyState = {
  Loading: boolean;
  Success: boolean;
  Error: boolean;
  Books: any;
  AuthorLoading: boolean;
  AuthorSuccess: boolean;
  AuthorError: boolean;
  Author: any;
};

const initialState: MyState = {
  Loading: false,
  Success: false,
  Error: false,
  Books: null,
  AuthorLoading: false,
  AuthorSuccess: false,
  AuthorError: false,
  Author: null,
};

export default initialState;
