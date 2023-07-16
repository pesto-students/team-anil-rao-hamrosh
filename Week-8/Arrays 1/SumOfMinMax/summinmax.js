function getSum(input) {
  let arr = input.split(",");
  let min, max;
  min = arr[0];
  max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return parseInt(max) + parseInt(min);
}

function showResult() {
  let input = document.getElementById("numbox").value;
  if (/\D[,]/.test(input)) {
    document.getElementById("message").innerHTML = "Enter a valid string.";
    return;
  }

  document.getElementById("message").innerHTML = getSum(input);
}
