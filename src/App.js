import { useState, useEffect } from "react";
import { connect } from "react-redux";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import * as actions from "./redux/actions";

import shortid from "shortid";

import "./App.css";
import { number } from "prop-types";

// const contactsDefault = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

function App() {
  // const [filter, setFilter] = useState("");
  // const [contacts, setContacts] = useState(() => {
  // return JSON.parse(window.localStorage.getItem("savedContacts"));
  // ??
  // contactsDefault

  // return (
  //   JSON.parse(window.localStorage.getItem("savedContacts")) ?? contactAdded
  // );

  //   return contactAdded;
  // });

  // useEffect(() => {
  //   setContacts(contactAdded);
  // }, [contactAdded]);

  // contactAdded ?? setContacts(contactAdded);
  // console.log("!!!contacts", contacts);
  // console.log("!!!contactAdded", contactAdded);

  //+

  // const addContact = (name, number) => {
  //   //+
  //   const contact = {
  //     id: shortid.generate(),
  //     name: name,
  //     number: number,
  //   };

  //   contacts.find(
  //     ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
  //   )
  //     ? alert(`${name} is already in contacts.`)
  //     : setContacts((prevState) => [contact, ...prevState]);
  // };

  //+
  // const deleteContact = (idForDelete) => {
  //   setContacts((prevState) =>
  //     prevState.filter((contact) => contact.id !== idForDelete)
  //   );
  // };

  //+
  // const changeFilter = (event) => {
  //   setFilter(event.currentTarget.value);
  // };

  // ***GO TO ContactList
  // const visibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };
  // ***GO TO ContactList

  // useEffect(() => {
  //   window.localStorage.setItem("savedContacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const contactsFromLocalStorage = localStorage.getItem("savedContacts");
  // const parsedContactsFromLocalStorage = JSON.parse(contactsFromLocalStorage);

  return (
    <>
      <h1>Phonebook</h1>
      {/* <ContactForm onAdd={addContact} /> */}
      <ContactForm />

      <h3>Find contacts by name</h3>
      {/* <Filter value={filter} onChange={changeFilter} /> */}
      <Filter />
      <h2>Contacts</h2>
      <ContactList
      // contacts={visibleContacts()}
      // onDeleteContact={deleteContact}
      />
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     // addContact: state.payload,
//     nameAdd: state.payload.name,
//     numberAdd: state.payload.number,
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     contactAdded: state.contacts.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addContact: () =>
//       dispatch(
//         actions.addContact(
//           mapStateToProps.payload.name,
//           mapStateToProps.payload.number
//         )
//       ),
//   };
// };

// export default connect(mapStateToProps, null)(App);
export default App;

// CLASSES
// class OldApp extends Component {
// +   state = {
// +     contacts: [
// +       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
// +       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
// +       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
// +       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// +     ],
//     filter: "",
//   };

// +   addContact = (name, number) => {
// +     const contact = {
// +       id: shortid.generate(),
// +       name: name,
// +       number: number,
// +     };

//     this.state.contacts.find(
//       ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
//     )
//       ? alert(`${name} is already in contacts.`)
//       : this.setState((prevState) => ({
//           contacts: [contact, ...prevState.contacts],
//         }));
//   };

//   deleteContact = (idForDelete) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter(
//         (contact) => contact.id !== idForDelete
//       ),
//     }));
//   };

//   changeFilter = (event) => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   visibleContacts = () => {
//     const normalizedFilter = this.state.filter.toLowerCase();
//     return this.state.contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem(
//         "savedContacts",
//         JSON.stringify(this.state.contacts)
//       );
//     }
//   }

//   componentDidMount() {
//     const contactsFromLocalStorage = localStorage.getItem("savedContacts");
//     const parsedContactsFromLocalStorage = JSON.parse(contactsFromLocalStorage);

//     parsedContactsFromLocalStorage
//       ? this.setState({ contacts: parsedContactsFromLocalStorage })
//       : this.setState({ contacts: this.state.contacts });
//     // this.setState({ contacts: parsedContactsFromLocalStorage });
//   }

//   render() {
//     return (
//       <>
//         <h1>Phonebook</h1>
//         <ContactForm onAdd={this.addContact} />

//         <h3>Find contacts by name</h3>
//         <Filter value={this.state.filter} onChange={this.changeFilter} />

//         <h2>Contacts</h2>
//         <ContactList
//           contacts={this.visibleContacts()}
//           onDeleteContact={this.deleteContact}
//         />
//       </>
//     );
//   }
// }

// export default App;
