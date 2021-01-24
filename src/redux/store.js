import { createStore, combineReducers } from "redux";
import logger from "redux-logger";
import {
  configureStore,
  createReducer,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import actions from "./actions";
// import { ADDCONTACT, DELCONTACT, FINDCONTACT } from "./contact-types";
// import { composeWithDevTools } from "redux-devtools-extension";

const contacts = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

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

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const contactspersistConfig = {
  key: "savedContacts",
  storage,
  blacklist: ["filter"],
};

// const rootRedusers = combineReducers({
//   contacts: persistReducer(persistConfig, contactsReducer),
// });

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactspersistConfig, contactsReducer),
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };
