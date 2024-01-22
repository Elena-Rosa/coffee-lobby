import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditCoffeeForm(props) {
  const { coffee } = props;

  function handleEditFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: parseInt(event.target.price.value),
      id: coffee.id
    })
  }
  return (
    <>
      <ReusableForm 
        formSubmissionHandler={handleEditFormSubmission}
        buttonText="Coffee" />
    </>
  )
}

EditCoffeeForm.propTypes = {
  editCoffee: PropTypes.func.isRequired,
  baseValue: PropTypes.object
};

export default EditCoffeeForm;