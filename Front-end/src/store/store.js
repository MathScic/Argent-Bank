import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/reducers";
import * as actions from "./actions";

//Combiné les reducers
const rootReducer = combineReducers({
  user: userReducer,
});
//Ajout des reducers

// Créer le store en utilisant le rootReducer et le middleware thunk
const store = createStore(rootReducer, applyMiddleware(thunk));

export { store, actions };
