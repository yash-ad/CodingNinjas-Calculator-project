//Lets intialize some variables:-
const display = document.querySelector(".screenDisplay");
//`display`: Holds a reference to the calculator's display screen element with the class `screenDisplay`.
const buttons = document.querySelectorAll("button");
//`buttons`: Holds references to all button elements on the calculator.
const specialChars = ["%","*","/","-","+","="];
//`specialChars`: An array containing special characters used in calculations as an operations: `%`, `*`, `/`, `-`, `+`, `=`.
let output = "";
//`output`: A variable that stores the current input/output for calculations.


//This calculate() function is responsible for handling different button clicks
//and updating the `output` and display accordingly.
const calculate = (btnValue) =>
{
if(btnValue === "=" && btnValue !== "")
// If the `=` button is clicked and the `output` is not empty, it evaluates the expression in the `output`,
{
// handling percentage calculations by replacing `%` with `/100` before evaluation.
output = eval(output.replace("%","/100"))
}
//If the `AC` button is clicked, it clears the `output`.
else if(btnValue === "AC")
{
output = ""; 
//In JavaScript, an empty string "" is considered a "falsy" value. 
//This means that when you use an empty string in a boolean context,
//such as in an if statement or a conditional expression,
//it will be evaluated as false.
}
else if(btnValue === "DEL")
//If the `DEL` button is clicked, it removes the last character from the `output`.
{
output = output.toString().slice(0,-1);
//output: This is a variable that holds the current input/output for calculations in your calculator.
//toString():This is a method that converts the value of output to a string. 
//In JavaScript, the slice method is a string method, and it operates on strings. 
//By converting output to a string using .toString(), you're ensuring that you can use string methods on it.
}
else
{
//This line checks whether the output is empty ("") and
//Whether the btnValue(the value associated with the button that was clicked) is included in the specialChars array.
//If both conditions are met, it means that you're trying to start an expression with a special character, which might not be valid.
//In this case, the return statement stops the further execution of the calculate function.
// output += btnValue;
// If the conditions in the previous if statement are not met, 
// this line appends the value of the clicked button (btnValue) to the output string.
// For example, if output is "123" and the button with a value of "+" is clicked, this line would change output to "123+".
    if(output === "" && specialChars.includes(btnValue)) return;
output += btnValue;
}
display.value = output;
//After updating the output string, this line updates the value displayed on the calculator's display screen (represented by the display element) with the current value of the output string.
//This ensures that the user sees the updated input/output on the calculator's display as they interact with the buttons.
};


//buttons: This is a NodeList containing references to all the button elements in your calculator interface.
//.forEach((button) => { ... }): This loop iterates over each button element in the buttons NodeList.
//button.addEventListener("click", (e) => calculate(e.target.dataset.value));:
//For each button, an event listener is added to respond to the "click" event.
//When a button is clicked, the provided arrow function (e) => calculate(e.target.dataset.value) is executed.
//e is the event object that represents the click event.
//e.target refers to the HTML element that triggered the event, which is the clicked button.
//e.target.dataset.value retrieves the value of the data-value attribute of the clicked button. This attribute corresponds to the value associated with the button (e.g., numbers, operators).
//The calculate function is then called with the data-value as an argument. This updates the calculator's output and performs the necessary calculations.
buttons.forEach((button)=>{
button.addEventListener("click",(e) => calculate(e.target.dataset.value));
});

