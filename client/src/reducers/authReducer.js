import { fromJS } from "immutable";
import createReducer from "../utils/createReducer";
import { actionTypes } from "../utils/constants";

const initiaState = fromJS({
  isLoading: false,
  isLogin: false
});

const handleLoginRequest = state => state.set("isLoading", false).set('isLogin', true);

const authReducer = createReducer(initiaState, {
  [actionTypes.USER_LOGIN_REQUEST]: handleLoginRequest
});

export default authReducer;
