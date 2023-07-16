function getCount(input) {
  let arr = input.split(",");
  return arr.length;
}

function showResult() {
  let input = document.getElementById("numbox").value;
  if (/\D[,]/.test(input)) {
    document.getElementById("message").innerHTML = "Enter a valid string.";
    return;
  }

  document.getElementById("message").innerHTML = getCount(input);
}
