import {
  LOGIN_REQUEST_STARTED,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE,
} from "../actions/actions";

const initialState = {
  user: null,
  api: {
    loading: false,
    data: null,
    error: null,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_STARTED:
      return { ...state, api: { loading: true, data: null, error: null } };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        user: action.payload,
        api: { loading: false, data: null, error: null },
      };
    case LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        api: { loading: false, data: null, error: action.payload },
      };

    default:
      return state;
  }
};

export default rootReducer;
