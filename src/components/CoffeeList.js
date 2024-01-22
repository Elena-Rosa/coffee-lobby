import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";



function CoffeeList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffee) => 
        <Coffee
          name={coffee.name}
          origin={coffee.origin}
          price={coffee.price}
          roast={coffee.roast}
          id={coffee.id}
          key={coffee.id}
          coffeeClicked = { coffeeSelection }/>
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  coffeeSelection: PropTypes.func
};
export default CoffeeList;