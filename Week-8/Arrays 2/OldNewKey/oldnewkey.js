function getArray(input, oldk, newk) {
  let arr = input.split(",");
  let finalArr = arr.map((val) => {
    return val == oldk ? newk : val;
  });
  console.log(finalArr);
  return finalArr;
}

function showResult() {
  let input = document.getElementById("numbox").value;
  let oldk = document.getElementById("oldkey").value;
  let newk = document.getElementById("newkey").value;
  // if (/\D[,]/.test(input)) {
  //   document.getElementById("message").innerHTML = "Enter a valid string.";
  //   return;
  // }

  document.getElementById("message").innerHTML = getArray(input, oldk, newk);
}
