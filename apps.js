'use strict';


function favoriteCar(){
    let carname = prompt("What is your favorite car?");
        console.log(carname);
    return carname;
}

let carname = whatcar();

function whatcar(){
    let response = prompt("Hello " + carname + ". What bmw do you like?").toLowerCase();
        console.log(response + " loop");
    while(response !== "M8" && response !== "M5"){
        console.log(response + " in loop");
        response = prompt("Enter 'M8' or 'M5'.").toLowerCase();
        console.log(response + " after prompt");
    }

    let car;

    if(response === "M8"){
        car = prompt("Great Bro, You picked the right car");
        console.log(car + " cars");
    }else{
        alert("Wrong answer bro.");
    }
return car;
}

let car = whatcar();