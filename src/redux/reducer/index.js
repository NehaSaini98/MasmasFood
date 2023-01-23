import { combineReducers } from "redux";
import loader from "./loader";
import userDetail from "./userDetail";

const rootReducer = combineReducers({
  loader,
  userDetail
});

const appReducer = (state, action) => {
  return rootReducer(state, action);
};

export default appReducer;
