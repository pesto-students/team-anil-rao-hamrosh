function checkPalindrome(num) {
  let revnum = 0;
  let tempnum = num;
  while (tempnum != 0) {
    revnum = revnum * 10 + (tempnum % 10);
    tempnum = parseInt(tempnum / 10);
  }
  return revnum == num ? true : false;
}

function showResult() {
  let num = document.getElementById("numbox").value;
  if (/\D/.test(num)) {
    document.getElementById("message").innerHTML = "Enter a valid number.";
    return;
  }

  if (checkPalindrome(num)) {
    document.getElementById("message").innerHTML = "Yes";
  } else {
    document.getElementById("message").innerHTML = "No";
  }
}
