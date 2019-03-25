import { connect } from "react-redux";
import { loginRequest } from "../../../../../actions/authAction";
import Login from "./Login";

export const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginRequest(user))
});

const LoginContainer = connect(
  null,
  mapDispatchToProps
)(Login);

export default LoginContainer;
