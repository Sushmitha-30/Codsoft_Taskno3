const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      let result;
      try {
        result = eval(display.innerText);
        if (isNaN(result) || !isFinite(result)) {
          throw new Error("Invalid expression");
        }
      } catch (error) {
        result = "Error";
      }
      display.innerText = result;
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else if (item.id == "sqrt") {
      display.innerText += "Math.sqrt(";
    } else if (item.id == "power") {
      display.innerText += "**";
    } else if (item.id == "pi") {
      display.innerText += Math.PI;
    } else if (item.id == "sin") {
      display.innerText += "Math.sin(";
    } else if (item.id == "cos") {
      display.innerText += "Math.cos(";
    } else if (item.id == "tan") {
      display.innerText += "Math.tan(";
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
