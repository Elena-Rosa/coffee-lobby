import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee, onClickingDelete, onClickingEdit, onClickingUpdate } = props;

  // function handleDecrementing(){
  //   onClickingUpdate(coffee, -1);
  // }
  
  // function handleIncrementing(){
  //   onClickingUpdate(coffee, 1);
  // }

  return (
    <React.Fragment>
      <h3>{coffee.Details}</h3>
      <h3>{coffee.name} - {coffee.origin} - {coffee.price} - {coffee.roast}</h3>
      {/* <button onClick={handleIncrementing}>Update Coffee</button>
      <button onClick={handleDecrementing}>Update Coffee</button> */}
      <br />
      <button onClick={() => onClickingEdit(coffee.id)}>Edit Coffee</button>
      <button onClick={() => onClickingDelete(coffee.id)}>Finished</button>
      <br />
    </React.Fragment>
  )
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingIncrement: PropTypes.func
}

export default CoffeeDetail;