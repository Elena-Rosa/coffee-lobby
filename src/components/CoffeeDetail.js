import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee, onClickingDelete, onClickingEdit, onClickingUpdate } = props;



  return (
    <React.Fragment>
      <h3>{coffee.Detail}</h3>
      <h3>{coffee.name} - {coffee.origin} - {coffee.price} - {coffee.roast}</h3>
      <p><em>{coffee.available}</em></p>
      <br />
      <button onClick = { props.onClickingEdit }>Edit Coffee</button>
      <button onClick = { props.onCoffeeSale }>Sell</button> 
      <button onClick={() => onClickingDelete(coffee.id)}>Delete</button>
      <br />
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onCoffeeSale: PropTypes.func
};

export default CoffeeDetail;