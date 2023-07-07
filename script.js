// Get references to the buttons and the toggle button
var buttons = document.getElementsByClassName("scientific");
var toggleButton = document.getElementById("toggleButton");
var header = document.querySelector("h1");

// Add a click event listener to the toggle button
toggleButton.addEventListener("click", function () {
  // Toggle the visibility of the buttons
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].style.display === "none") {
      buttons[i].style.display = "inline-block";
    } else {
      buttons[i].style.display = "none";
    }
  }

  if (toggleButton.innerText === ">") {
    toggleButton.innerText = "<";
    header.innerText = "Simple Calculator"; // Change the text of h1 to "AAA"
  } else {
    toggleButton.innerText = ">";
    header.innerText = "Scientfic Calculator"; // Change the text of h1 to "AAA"
  }
});

// Get the operation element by its ID
const operationElement = document.getElementById("operation");

// Get the result element by its class name
const resultElement = document.querySelector(".result .value:nth-child(2)");

const equalButton = document.querySelector(".equalButton");

// Add an event listener to the "=" button
equalButton.addEventListener("click", calculateResult);
let value = "";

// Function to calculate and display the result
function calculateResult() {
  const operation = value;
  try {
    const result = eval(operation);
    resultElement.innerText = result;
    ansButton.innerText = result; // Update the "Ans" button value
  } catch (error) {
    resultElement.innerText = "Error";
  }
}

var ansButton = document.querySelector(".answer");
ansButton.addEventListener("click", function () {
  if (value.slice(-1) !== "=") {
    value += ansButton.innerText; // Append the "Ans" value to the existing value
    operationElement.textContent = value; // Update the operation element
    equalButton.click(); // Trigger the click event of the "=" button to calculate and display the result
  }
});

// Get all the buttons
const but = document.querySelectorAll("button");

// Add event listeners to each button
but.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the text content of the clicked button
    const buttonText = button.textContent;

    // Check if the button should be ignored
    if (buttonText === ">" || buttonText === "<") {
      return; // Skip updating the value
    }

    if (value.slice(-1) === "=") {
      // Reset the value if the last character is "="
      value = "";
      resultElement.innerText = "0";
    }

    if (buttonText === "AC") {
      // Handle "AC" button to clear all text
      value = "";
      resultElement.innerText = "0";
    } else if (buttonText === "DEL") {
      // Handle "Del" button to delete the last digit
      value = value.slice(0, -1);
      resultElement.innerText = "0";
    } else if (buttonText === "√") {
      // Handle "√" button for square root calculation
      const result = Math.sqrt(eval(value));
      resultElement.innerText = result;
      value = "Math.sqrt(" + value + ")" + "=";
    } else if (buttonText === "3√x") {
      // Handle "3√x" button for cube root calculation
      const result = Math.cbrt(eval(value));
      resultElement.innerText = result;
      value = "Math.cbrt(" + value + ")" + "=";
    } else if (buttonText === "cos") {
      // Handle "cos" button for cosine calculation
      const result = Math.cos(eval(value));
      resultElement.innerText = result;
      value = "Math.cos(" + value + ")" + "=";
    } else if (buttonText === "sin") {
      // Handle "cos" button for cosine calculation
      const result = Math.sin(eval(value));
      resultElement.innerText = result;
      value = "Math.sin(" + value + ")" + "=";
    } else if (buttonText === "tan") {
      // Handle "cos" button for cosine calculation
      const result = Math.tan(eval(value));
      resultElement.innerText = result;
      value = "Math.tan(" + value + ")" + "=";
    } else if (buttonText === "acos") {
      // Handle "cos" button for cosine calculation
      const result = Math.acos(eval(value));
      resultElement.innerText = result;
      value = "Math.acos(" + value + ")" + "=";
    } else if (buttonText === "asin") {
      // Handle "cos" button for cosine calculation
      const result = Math.asin(eval(value));
      resultElement.innerText = result;
      value = "Math.asin(" + value + ")" + "=";
    } else if (buttonText === "atan") {
      // Handle "cos" button for cosine calculation
      const result = Math.atan(eval(value));
      resultElement.innerText = result;
      value = "Math.atan(" + value + ")" + "=";
    } else if (buttonText === "ln") {
      // Handle "cos" button for cosine calculation
      const result = Math.log(eval(value));
      resultElement.innerText = result;
      value = "Math.log(" + value + ")" + "=";
    } else if (buttonText === "log") {
      // Handle "cos" button for cosine calculation
      const result = Math.log10(eval(value));
      resultElement.innerText = result;
      value = "Math.log10(" + value + ")" + "=";
    } else if (buttonText === "x!") {
      // Handle "x!" button for factorial calculation
      const result = factorial(eval(value));
      resultElement.innerText = result;
      value = "factorial(" + value + ")" + "=";
    } else if (buttonText === "x²") {
      // Handle "x²" button for square calculation
      value = "(" + value + ") * (" + value + ")" + "=";
      const result = eval(value);
      resultElement.innerText = result;
    } else if (buttonText === "x3") {
      // Handle "x²" button for square calculation
      value = "(" + value + ") * (" + value + ") * (" + value + ")" + "=";
      const result = eval(value);
      resultElement.innerText = result;
    } else if (buttonText === "exp") {
      // Handle "exp" button for exponential calculation
      const result = Math.exp(eval(value));
      resultElement.innerText = result;
      value = "Math.exp(" + value + ")" + "=";
    } else if (buttonText === "x^y") {
      // Handle "x^y" button for exponentiation calculation
      value += "**";
    } else if (buttonText === "π") {
      // Handle "π" button for pi constant
      // Check if there is a number before π
      const isNumberBefore = /\d$/.test(value);

      if (isNumberBefore) {
        value += "*" + "Math.PI";
      } else {
        value += "Math.PI";
      }
    } else if (buttonText === "e") {
      // Handle "e" button for the constant e
      // Check if there is a number before e
      const isNumberBefore = /\d$/.test(value);

      if (isNumberBefore) {
        value += "*" + "Math.E";
      } else {
        value += "Math.E";
      }
    } else {
      // Append the button value to the existing value
      value += buttonText;
    }
    // Update the value of the operation element
    operationElement.textContent = value;
  });
});

// Function to calculate the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
