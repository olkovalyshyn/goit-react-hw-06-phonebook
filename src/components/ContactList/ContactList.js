import { connect } from "react-redux";

import PropTypes from "prop-types";

import { deleteContact } from "../../redux/actions";
import s from "./ContactList.module.css";

function ContactList({ contacts, onDeleteContact, fffTestInfoCome }) {
  console.log("!!!contacts in ContactsList", contacts);
  console.log("!!!state.contacts.items", contacts);
  console.log("!!! IN MAIN fffTestInfoCome", fffTestInfoCome);

  return (
    <ul className={s.formContact}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.formContactItem}>
          {name}: {number}
          <button
            className={s.formContactButton}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// const mapStateToProps = (state) => {
//   const { items, filter } = state.contacts;
//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts = getVisibleContacts(items, filter);

//   return {
//     contacts: visibleContacts,
//   };
// };

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// const mapStateToProps = (state) => ({
//   fffTestInfoCome: state.contacts.items,
//   contacts: getVisibleContacts(state.contacts.items, state.contacts.filter),
// });

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter((item) =>
    item.name.toLowerCase().includes(normalizedFilter)
  );

  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteContact: (id) => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
