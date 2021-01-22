import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import actionType from "./contact-types";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.ADDCONTACT:
      return [payload, ...state];

    case actionType.DELCONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

// const reducer = () => ({});

const store = createStore(
  reducer,
  composeWithDevTools()
  // other store enhancers if any
);

export default store;
