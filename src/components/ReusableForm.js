import React from "react";
import PropTypes from "prop-types";

function ReuseableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name of Coffee"
          required />
        <br />
        <input
          type="text"
          name="origin"
          placeholder="Origin"
          required />
        <br />
        <input
          type="text"
          name="price"
          placeholder="Price"
          required />
        <br />
        <textarea
          type="text"
          name="roast"
          placeholder="Roast"
          required />
        <br />
        <textarea
          type="text"
          name="available"
          placeholder="Available"
          required />
        <br />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReuseableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};


export default ReuseableForm;