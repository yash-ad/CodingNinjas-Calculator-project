//Lets intialize some variables:-
const display = document.querySelector(".screenDisplay");
const buttons = document.querySelectorAll("button");
const specialChars = ["%","*","/","-","+","="];
let output = "";


//Define calculate function to based on button clicked:-
const calculate = (btnValue) =>
{
if(btnValue === "=" && btnValue !== "")
//If output has "%",replace with "/100" before evaluating.
{
output = eval(output.replace("%","/100"))
}
else if(btnValue === "AC")
{
output = "";
}
else if(btnValue === "DEL")
{
//If DEL button is clicked,Remove the last character from the output.
output = output.toString().slice(0,-1);
}
else
{
//If output is empty and button is specialChars then return.
if(output === "" && specialChars.includes(btnValue)) return;
output += btnValue;
}
display.value = output;
};

//Add event listener to buttons,call calculate() on click:-
buttons.forEach((button)=>{
//Button click listener calls calculate() with dataset value as argument.
button.addEventListener("click",(e) => calculate(e.target.dataset.value));
});

