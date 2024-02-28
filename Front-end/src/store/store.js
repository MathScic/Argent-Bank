import { createStore } from "redux";
import rootReducer from "../store/reducers/reducers";

const initialState = {
  user: null,
  api: {
    loading: false,
    data: null,
    error: null,
  },
};

const store = createStore(rootReducer, initialState);

export default store;
