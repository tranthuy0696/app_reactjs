import { combineReducers } from "redux-immutable";
import user from "./userReducer";
import auth from "./authReducer";

const reducers = combineReducers({
  auth,
  user
});

export default reducers;
