import React from "react";
import coffeeImage from "./../img/coffeeImage.jpg";

function Header(){
    return (
        <React.Fragment>
            <h1>Welcome to your coffee lobby.</h1>
            <h2>Coffee List</h2>
            <img src={coffeeImage} alt="An image of coffee" />
        </React.Fragment>
    );
}

export default Header;