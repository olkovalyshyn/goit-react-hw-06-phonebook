import React from "react";
import { connect } from "react-redux";

import actions from "../../redux/actions";

import PropTypes from "prop-types";

function Filter({ value, onChange }) {
  return <input type="text" value={value} onChange={onChange}></input>;
}

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) =>
    dispatch(actions.filterContact(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
