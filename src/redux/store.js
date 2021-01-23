import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { ADDCONTACT, DELCONTACT, FINDCONTACT } from "./contact-types";

const contacts = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

console.log("!!!in Store contacts.items", contacts.items);
console.log("!!!in Store contacts.filter", contacts.filter);
console.log("state = contacts.items", contacts.items);

// const initialState = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

// const reducer = (state = initialState.contacts.items, { type, payload }) => {
//   switch (type) {
//     case ADDCONTACT:
//       return [payload, ...state];

//     case DELCONTACT:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

const itemReducer = (state = contacts.items, { type, payload }) => {
  switch (type) {
    case ADDCONTACT:
      return [payload, ...state];

    case DELCONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = contacts.filter, { type, payload }) => {
  switch (type) {
    case FINDCONTACT:
      return payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  item: itemReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools()
  // other store enhancers if any
);

export default store;
