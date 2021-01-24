import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";
// import { ADDCONTACT, DELCONTACT, FINDCONTACT } from "./contact-types";

export const addContact = createAction("Contact/addContact", (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name: name,
      number: number,
    },
  };
});
// export const addContact = (name, number) => ({
//   type: ADDCONTACT,
//   payload: {
//     id: shortid.generate(),
//     name: name,
//     number: number,
//   },
// });

export const deleteContact = createAction("Contact/deleteContact");
// export const deleteContact = (idForDelete) => ({
//   type: DELCONTACT,
//   payload: idForDelete,
// });

export const filterContact = createAction("Contact/ChangeFilter");
// export const filterContact = (value) => ({
//   type: FINDCONTACT,
//   payload: value,
// });

export default { addContact, deleteContact, filterContact };
