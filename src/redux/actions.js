import shortid from "shortid";
import { ADDCONTACT, DELCONTACT, FINDCONTACT } from "./contact-types";

export const addContact = (name, number) => ({
  type: ADDCONTACT,
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
});

console.log("!!!addContact", addContact());

export const deleteContact = (idForDelete) => ({
  type: DELCONTACT,
  payload: idForDelete,
});

export const filterContact = (value) => ({
  type: FINDCONTACT,
  payload: value,
});

export default { addContact, deleteContact, filterContact };
