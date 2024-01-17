import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditCoffeeForm(props) {
  const { coffee } = props;

  function handleEditFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      urgency: parseInt(event.target.urgency.value),
      id: coffee.id
    })
  }
  return (
    <>
      <ReusableForm 
        formSubmissionHandler={handleEditFormSubmission}
        buttonText="Update Ticket" />
    </>
  )
}

EditCoffeeForm.propTypes = {
  ticket: PropTypes.object,
  onEditTicket: PropTypes.func
}

export default EditCoffeeForm;