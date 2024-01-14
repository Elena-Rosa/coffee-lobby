import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm />;
      buttonText = "Return to Coffee List"; 
    } else {
      currentlyVisibleState = <CoffeeList />;
      buttonText = "Add Ticket"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
      </React.Fragment>
    );
  }

}

export default CoffeeControl;