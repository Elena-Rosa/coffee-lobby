import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <h3>{props.type}</h3>
      <hr/>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  type: PropTypes.string.isRequired
};
export default Coffee;