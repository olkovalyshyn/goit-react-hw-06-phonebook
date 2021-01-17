import React from "react";

import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange}></input>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
