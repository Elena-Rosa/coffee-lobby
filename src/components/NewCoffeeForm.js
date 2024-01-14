import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";


function NewCoffeeForm(props){
    function handleNewTicketFormSubmission(event) {
        event.preventDefault();
        props.onNewCoffeeCreation({
            type: event.target.type.value,
            id: v4()
      })
    }
    return (
    <></>   
      );
    }

    
    NewCoffeeForm.propTypes = {
      onNewCoffeeCreation: PropTypes.func
    }
    
    export default NewCoffeeForm;
