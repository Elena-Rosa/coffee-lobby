import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";



function CoffeeList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffee) => 
        <Coffee
          whenCoffeeClicked = { props.oncoffeeSelection }
          name={coffee.name}
          origin={coffee.origin}
          price={coffee.price}
          roast={coffee.roast}
          available={coffee.available}
          id={coffee.id}
          key={coffee.id}/>
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  coffeeSelection: PropTypes.func
};
export default CoffeeList;