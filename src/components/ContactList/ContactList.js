import { connect } from "react-redux";

import PropTypes from "prop-types";

import actions from "../../redux/actions";
import s from "./ContactList.module.css";

function ContactList({ contacts, onDeleteContact }) {
  console.log("!!!contacts in ContactsList", contacts);

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
//   return {
//     id: state.id
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
  };
};

// export default ContactList;

export default connect(null, mapDispatchToProps)(ContactList);

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
