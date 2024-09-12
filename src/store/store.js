import { createStore } from "redux";
import reducer from "../reducers/countReducer";

export const initialState = {
  count: 0,
};

let store = createStore(reducer, initialState);

export default store;
