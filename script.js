const display = document.querySelector(".display");
const operations = document.querySelectorAll(".operations");

function appendToDisplay(buttonValue) {
  display.innerText += buttonValue;
}

function clearDisplay() {
  display.innerText = "";
}

function deleteItem() {
  console.log(display.innerText);
  display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = "Error";
  }
}
