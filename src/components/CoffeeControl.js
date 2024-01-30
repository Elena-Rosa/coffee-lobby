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
            name: "Sun Bean",
            origin: "Las Vegas", 
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

  handleCoffeeSelection = (selectedCoffee) => {
    this.setState({
      selectedCoffee,
      formVisibleOnPage: false,
      editing: false,
    });
  }

  handleNewCoffeeFormSubmission = (newCoffee) => {
    if (
      !newCoffee.name ||
      !newCoffee.origin ||
      !newCoffee.roast ||
      !newCoffee.price ) {
      alert("Please fill out all fields");  
      return;
    }
    const inputCoffee = {
      ...newCoffee,
      quantity: 0,
      sack: 0,
      id: v4()
    };

    this.setState((prevState) => ({
      mainCoffeeList: [...prevState.mainCoffeeList, inputCoffee],
      formVisibleOnPage: false
    }));
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

   handleEditClick = () => {
       this.setState({editing: true});
   }
   handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  } 
  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }
  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail coffee = {this.state.selectedCoffee} />;
      buttonText = "Return to Coffee List"; 
    } 
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleNewCoffeeFormSubmission} />;
      buttonText = "Return to Coffee List";
    } else {
          currentlyVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList} oncoffeeSelection={this.handleChangingSelectedCoffee} />;
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