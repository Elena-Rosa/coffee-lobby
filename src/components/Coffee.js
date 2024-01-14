import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.origin}</h3>
      <h3>{props.price}</h3>
      <h3>{props.roast}</h3>
      <h3>{props.sack}</h3>
    
      <hr/>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  sack: PropTypes.array.isRequired
};
export default Coffee;