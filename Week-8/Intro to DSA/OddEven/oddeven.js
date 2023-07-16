function checkEven(num) {
  return num % 2 == 0 ? true : false;
}

function showResult() {
  let num = document.getElementById("numbox").value;
  if (/\D/.test(num)) {
    document.getElementById("message").innerHTML = "Enter a valid number.";
    return;
  }

  if (checkEven(num)) {
    document.getElementById("message").innerHTML = "Even";
  } else {
    document.getElementById("message").innerHTML = "Odd";
  }
}
