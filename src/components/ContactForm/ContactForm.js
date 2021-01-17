import { useState } from "react";

import PropTypes from "prop-types";

import s from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    switch (event.currentTarget.name) {
      case "name":
        setName(event.currentTarget.value);
        break;

      case "number":
        setNumber(event.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setNumber("");
    onAdd(name, number);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          className={s.input}
          value={name}
          onChange={handleChange}
        ></input>
      </label>

      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          className={s.input}
          value={number}
          onChange={handleChange}
        ></input>
      </label>

      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

// class OldContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   handleChange = (event) => {
//     this.setState({ [event.currentTarget.name]: event.currentTarget.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.setState({ name: "", number: "" });
//     this.props.onAdd(this.state.name, this.state.number);
//   };

//   render() {
//     return (
//       <form className={s.form} onSubmit={this.handleSubmit}>
//         <label className={s.label}>
//           Name
//           <input
//             type="text"
//             name="name"
//             className={s.input}
//             value={this.state.name}
//             onChange={this.handleChange}
//           ></input>
//         </label>

//         <label className={s.label}>
//           Number
//           <input
//             type="tel"
//             name="number"
//             className={s.input}
//             value={this.state.number}
//             onChange={this.handleChange}
//           ></input>
//         </label>

//         <button type="submit" className={s.button}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;

ContactForm.propTypes = {
  onAdd: PropTypes.func,
};
