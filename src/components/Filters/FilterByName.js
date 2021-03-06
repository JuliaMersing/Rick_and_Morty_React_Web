import React from "react";
import PropTypes from "prop-types";
import "../../stylesheet/Filters/FilterByName.scss";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="name">
        Filter by name:
      </label>
      <input
        className="form__input"
        type="text"
        name="name"
        id="name"
        placeholder="We are waiting...please type a name"
        value={props.filterName}
        onChange={handleChange}
      />
    </>
  );
};

FilterByName.propTypes = {
  specie: PropTypes.string,
};

export default FilterByName;
