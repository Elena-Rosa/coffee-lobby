import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";


function NewCoffeeForm(props){
    function handleNewCoffeeFormSubmission(event) {
        event.preventDefault();
        props.onNewCoffeeCreation({
            type: event.target.type.value,
            id: v4()
      })
    }
    return (
        <>
        <form>
            <label>
            Name:
            <input type="text" name="name" />
             </label>
             <label>
            Origin:
            <input type="text" name="origin" />
             </label>
             <label>
            Price:
            <input type="text" name="price" />
             </label>
             <label>
            Roast:
            <input type="text" name="roast" />
             </label>
        </form>
     </>   
      );
    }

    
    NewCoffeeForm.propTypes = {
      onNewCoffeeCreation: PropTypes.func
    }
    
    export default NewCoffeeForm;
