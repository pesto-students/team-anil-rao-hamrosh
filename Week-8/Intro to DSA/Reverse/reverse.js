function reverse(num) {
  let revnum = 0;
  let tempnum = num;
  while (tempnum != 0) {
    revnum = revnum * 10 + (tempnum % 10);
    tempnum = parseInt(tempnum / 10);
  }
  return revnum;
}

function showResult() {
  let num = document.getElementById("numbox").value;
  if (/\D/.test(num)) {
    document.getElementById("message").innerHTML = "Enter a valid number.";
    return;
  }

  document.getElementById("message").innerHTML = reverse(num);
}
