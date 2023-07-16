function checkLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  }
  return false;
}

function showResult() {
  let year = document.getElementById("yearbox").value;
  if (/\D/.test(year)) {
    document.getElementById("message").innerHTML = "Enter a valid year";
    return;
  }

  if (checkLeapYear(year)) {
    document.getElementById("message").innerHTML = "Yes";
  } else {
    document.getElementById("message").innerHTML = "No";
  }
}
