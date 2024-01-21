import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReuseableForm from "./ReusableForm";


function NewCoffeeForm(props){
    function handleNewCoffeeFormSubmission(event) {
        event.preventDefault();
        props.onNewCoffeeCreation({
            name: event.target.name.value,
            origin: event.target.origin.value,
            price: event.target.price.value,
            roast: event.target.roast.value,
            available: event.target.available.value,
            id: v4()
      })
    }
    return (
        <React.Fragment>
            <h2>Add a new coffee to your lobby</h2>
        <ReuseableForm
                formSubmissionHandler={handleNewCoffeeFormSubmission}
                buttonText="Add to Lobby" />
        </React.Fragment>  
      );
    }

    
    NewCoffeeForm.propTypes = {
      onNewCoffeeCreation: PropTypes.func
    }
    
    export default NewCoffeeForm;
