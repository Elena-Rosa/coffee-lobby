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
        selectedCoffee: null,
        editing: false,
        mainCoffeeList: [
          {
            name: "Buddas Cup",
            origin: "Mexico", 
            price: 15,
            roast: "medium",
            available: 130,
            id: v4()
          },
          {
            name: "Fire and Smoke",
            origin: "Guatemala", 
            price: 18,
            roast: "dark",
            available: 130,
            id: v4()
          },
          {
            name: "Mi Amor",
            origin: "Colombia", 
            price: 17,
            roast: "medium",
            available: 130,
            id: v4()
          },
          {
            name: "Ethiopia",
            origin: "Ethiopia", 
            price: 15,
            roast: "medium",
            available: 130,
            id: v4()
          },
          {
            name: "Sumatra",
            origin: "Sumatra", 
            price: 15,
            roast: "medium",
            available: 130,
            id: v4()
          },
          {
            name: "Kenya",
            origin: "Kenya", 
            price: 15,
            roast: "medium",
            available: 130,
            id: v4()
          },
          {
            name: "Jayabo Afuera",
            origin: "Dominican Republic", 
            price: 15,
            roast: "medium",
            available : 130,
            id: v4() 
          },
          {
            name: "Giselle",
            origin: "Brazil", 
            price: 15,
            roast: "medium",
            available: 130,
            id: v4() 
          },
        ],
     };
  }

  handleClick = () => {
    if (this.state.selectedCoffee !== null) {
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
    if (
      !newCoffee.name ||
      !newCoffee.name ||
      !newCoffee.origin ||
      !newCoffee.roast ||
      !newCoffee.price 
    ) {
      return;
    }
    const inputCoffee = {
      ...newCoffee,
      quantity: 0,
      sack: 0,
      id: v4()
    };

    this.setState({
      mainCoffeeList: [...this.state.mainCoffeeList, inputCoffee],
      formVisibleOnPage: false
    });
    }

   handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
      this.setState({
        mainCoffeeList: editedMainCoffeeList,
        formVisibleOnPage: false,
        editing: false,
        selectedCoffee: null
      });
    }

    // handleEditClick = () => {
    //   this.setState({editing: true});
    // }
  };


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm />;
      buttonText = "Return to Coffee List"; 
    } else if (this.state.editing) {
      currentlyVisibleState = <EditCoffeeForm coffee = {this.state.selectedCoffee} onEditCoffee = {this.handleEditingCoffeeInList} />
      buttonText = "Return to Coffee List";
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail coffee = {this.state.selectedCoffee} onClickingDelete = {this.handleDeletingCoffee} onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Coffee List";
    } else {
      currentlyVisibleState = <CoffeeList />;
      buttonText = "Add Coffee"; 
    }
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default CoffeeControl;