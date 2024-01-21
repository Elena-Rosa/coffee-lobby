import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import CoffeeDetail from './CoffeeDetail';
import EditCoffeeForm from './EditCoffeeForm';
import { v4 } from 'uuid';

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        formVisibleOnPage: false,
        masterCoffeeList: [
          {
            name: "Buddas Cup",
            origin: "Mexico", 
            price: 15,
            roast: "medium",
            sack: [130] 
          },
          {
            name: "Fire and Smoke",
            origin: "Guatemala", 
            price: 18,
            roast: "dark",
            sack: [130] 
          },
          {
            name: "Mi Amor",
            origin: "Colombia", 
            price: 17,
            roast: "medium",
            sack: [130] 
          },
          {
            name: "Ethiopia",
            origin: "Ethiopia", 
            price: 15,
            roast: "medium",
            sack: [130] 
          },
          {
            name: "Sumatra",
            origin: "Sumatra", 
            price: 15,
            roast: "medium",
            sack: [130] 
          },
          {
            name: "Kenya",
            origin: "Kenya", 
            price: 15,
            roast: "medium",
            sack: [130] 
          },
          {
            name: "Jayabo Afuera",
            origin: "Dominican Republic", 
            price: 15,
            roast: "medium",
            sack: [130] 
          },
          {
            name: "Giselle",
            origin: "Brazil", 
            price: 15,
            roast: "medium",
            sack: [130] 
          },
        ],
        editing: false,
        selectedCoffee: null
     };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }  
  }

  handleNewCoffeeFormSubmission = (newCoffee) => {
    if (newCoffee.name != null) {
      newCoffee.id = v4();
      this.setState({masterCoffeeList: [...this.state.masterCoffeeList, newCoffee],
                    formVisibleOnPage: false });
    }

   const handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMasterCoffeeList = this.state.masterCoffeeList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
      this.setState({
        masterCoffeeList: editedMasterCoffeeList,
        editing: false,
        selectedCoffee: null
      });
    }

    const handleEditClick = () => {
      this.setState({editing: true});
    }
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm />;
      buttonText = "Return to Coffee List"; 
    } else {
      currentlyVisibleState = <CoffeeList />;
      buttonText = "Add Coffee"; 
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