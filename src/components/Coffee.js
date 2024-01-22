import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>coffee name: {props.name}</h3>
        <h3>coffee origin: {props.origin}</h3>
        <h3>coffee price: {props.price}</h3>
        <h3>coffee roast: {props.roast}</h3>
        <h3>coffee available: {props.available}</h3>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  id: PropTypes.string,
  available: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};
export default Coffee;