export const addContact = (name, number) => ({
  type: "App/addContact",
  payload: {
    name: name,
    number: number,
  },
});

export const deleteContact = (idForDelete) => ({
  type: "App/deleteContact",
  payload: idForDelete,
});
