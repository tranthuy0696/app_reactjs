import { actionTypes } from "../utils/constants";

export const loginRequest = user => ({
  type: actionTypes.USER_LOGIN_REQUEST,
  user
});

export default {};
