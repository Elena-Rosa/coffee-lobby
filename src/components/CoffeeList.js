import React from "react";
import Coffee from "./Coffee";

const masterCoffeeList = [
    {
         name: "Chiapas",
         origin: "Mexico", 
         price: 15,
         roast: "medium",
         sack: [130] 
    },

];

function CoffeeList(){
  return (
    <React.Fragment>
        <hr/>
        {masterCoffeeList.map((coffee, index) =>
        <Coffee type={coffee.type}
        key={index}/>
        )}
    </React.Fragment>
  );
}

export default CoffeeList;