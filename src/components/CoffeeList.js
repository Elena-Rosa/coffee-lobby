import React from "react";
import Coffee from "./Coffee";

const masterCoffeeList = [
    {
        type: "Medium",
    },
    {
        type: "Dark",
    },
    {
        type: "Light",
    
    }
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