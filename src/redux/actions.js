import shortid from "shortid";
import actionType from "./contact-types";

export const addContact = (name, number) => ({
  type: actionType.ADDCONTACT,
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
});

console.log("!!!addContact", addContact());

export const deleteContact = (idForDelete) => ({
  type: actionType.DELETECONTACT,
  payload: idForDelete,
});

export const changeFilter = (value) => ({
  type: actionType.FINDCONTACT,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
