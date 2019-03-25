import { fromJS } from "immutable";
import createReducer from "../utils/createReducer";
import { actionTypes } from "../utils/constants";

const initiaState = fromJS({
  isLoading: false,
  isLogin: false
});

const handleLoginRequest = state => state.set("isLogin", true);

const userReducer = createReducer(initiaState, {
  [actionTypes.USER_LOGIN_REQUEST]: handleLoginRequest
});

export default userReducer;
