import { createStore } from "redux";

const initialState = {};

const reduser = (state = initialState, action) => {
  return state;
};

const store = createStore(reduser);

export default store;
