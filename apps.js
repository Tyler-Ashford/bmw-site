'use strict';

function favoriteCar();{
    let username = prompt("What is your favorite car?");{
    console.log( 'Hi  ' + username);
    }
    favoriteCar();
    let answer = prompt( "Hi "  + username + "  Do you like the M8 or M5?");
    let submit;

if (answer === "M8") {
    submit = "You are a winner bro ";
}else if(answer === "M5") {
    submit = "I see you like baby cars";
}else{
 submit = "why would you want anything else other then a bmw.";
}
    document.write('Hi '+ username + ' ' + submit,);
    return username
