import shortid from "shortid";

export const addContact = (name, number) => ({
  type: "App/addContact",
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
});

export const deleteContact = (idForDelete) => ({
  type: "App/deleteContact",
  payload: idForDelete,
});

export const changeFilter = (value) => ({
  type: "App/ChangeFilter",
  payload: value,
});
