import React from "react";
import PropTypes from "prop-types";

function ReuseableForm(props) {
  return (
    <>
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
        <label htmlFor="urgency">Tally: </label>
        <input
          type="number"
          name="Tally"
          min="1"
          max="10"
          defaultValue="1"
          placeholder="Tally"
          required />
        <br />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  )
}

ReuseableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}


export default ReuseableForm;