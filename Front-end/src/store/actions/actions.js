import axios from "axios";

//Actions Types
export const LOGIN_REQUEST_STARTED = "LOGIN_REQUEST_STARTED";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_REQUEST_FAILURE = "LOGIN_REQUEST_FAILURE";

//Actions
const loginRequestStarted = () => ({ type: LOGIN_REQUEST_STARTED });
const loginRequestSuccess = (user) => ({
  type: LOGIN_REQUEST_SUCCESS,
  payload: user,
});
const loginRequestFailure = (error) => ({
  type: LOGIN_REQUEST_SUCCESS,
  payload: error,
});

//Action async pour effectuer la connexion
export const loginUser = (credential) => {
  return (dispatch) => {
    dispatch(loginRequestStarted());

    axios
      .post("http://localhost:3000/api/v1/user/login", credential)
      .then(
        (response) => console.log("Login success", response.data),
        (response) => dispatch(loginRequestSuccess(response.data))
      )
      .catch((error) => dispatch(loginRequestFailure(error)));
  };
};
