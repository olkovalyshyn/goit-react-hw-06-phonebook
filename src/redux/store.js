import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import actions from "./actions";
// import { ADDCONTACT, DELCONTACT, FINDCONTACT } from "./contact-types";

const contacts = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

console.log("!!!actions.addContact", actions.addContact);
console.log("!!!actions.addContact.type", actions.addContact.type);

const itemReducer = createReducer(contacts.items, {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
// const itemReducer = (state = contacts.items, { type, payload }) => {
//   switch (type) {
//     case ADDCONTACT:
//       return [payload, ...state];
//     case DELCONTACT:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

const filterReducer = createReducer(contacts.filter, {
  [actions.filterContact]: (_, { payload }) => payload,
});
// const filterReducer = (state = contacts.filter, { type, payload }) => {
//   switch (type) {
//     case FINDCONTACT:
//       return payload;

//     default:
//       return state;
//   }
// };

const contactsReducer = combineReducers({
  item: itemReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
