'use strict';


function greeting () {
    let username = prompt("What is your favorite car?");
    console.log(username);
    if (username === "M8") {
        console.log("Great choice!");
    } else {
        console.log("Wrong Choice " + username);
    }
    return username
}
function pickcar () {
    let response;
    while (response !== "bmw") {
        response = prompt("What is your favorite bmw?").toLowerCase();
        console.log(response);
        if (response == "850") {
            return response
        }
    }
}

function picGenerator () {
    let number = prompt("How many cars do you own? (1-5)");
    console.log(number);
    for (let i=0; i < number; i++){
        document.write("<img src='https://via.placeholder.com/90'class='pictures'/>")
    }
}

let userName = greeting();
document.write(userName);

let userguess = pickcar();
document.write("Great", userguess);

picGenerator()