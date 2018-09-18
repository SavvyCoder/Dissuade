import { combineReducers } from "redux";
import authReducer from "./authReducer";
import testReducer from "./testReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import postReducer from "./postReducer";

export default combineReducers({
  auth: authReducer,
  test: testReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer
});
