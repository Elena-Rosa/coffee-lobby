import React from "react";
import coffeeImage from "./../img/coffeeImage.jpg";

function Header(){
    return (
        <React.Fragment>
            <h1>Coffee List</h1>
            <img src={coffeeImage} alt="An image of coffee" />
        </React.Fragment>
    );
}

export default Header;