function getArray(input) {
  let arr = input.split(",");
  let finalArr = arr.filter((val) => {
    if (val % 2 != 0 && val % 3 != 0) {
      return val;
    }
  });
  console.log(finalArr);
  return finalArr;
}

function showResult() {
  let input = document.getElementById("numbox").value;
  if (/\D[,]/.test(input)) {
    document.getElementById("message").innerHTML = "Enter a valid string.";
    return;
  }

  document.getElementById("message").innerHTML = getArray(input).toString();
}
