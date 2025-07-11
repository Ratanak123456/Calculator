function sum() {
  let num1 = parseInt(document.getElementById("number1").value);
  let num2 = parseInt(document.getElementById("number2").value);
  let result = num1 + num2;

  if (isNaN(num1) && isNaN(num2)) {
    document.getElementById("result").textContent = "Please Input the Number";
  } else if (Number(num1) && isNaN(num2)) {
    document.getElementById("result").textContent = "Please Input the Second Number";
  } else if (isNaN(num1) && Number(num2)) {
    document.getElementById("result").textContent = "Please Input the First Number";
  } else {
    document.getElementById("result").textContent = result;
  }
}

function clearInputs() {
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  document.getElementById("result").textContent = "";
}