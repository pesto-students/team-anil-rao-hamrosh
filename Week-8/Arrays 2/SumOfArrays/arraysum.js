function getSum(arr1, arr2, row, col) {
  let array1 = arr1.split(",");
  let array2 = arr2.split(",");
  let newArr1 = [];
  let newArr2 = [];
  // for (let i = 0; i < row; i = i + col) {
  let tempArr = [];
  for (let j = 0; j < col; j++) {
    tempArr.push(array1[i + j]);
  }
  //   newArr1.push(tempArr);
  // }
  console.log(tempArr);
  return finalArr;
}

function calculateSumOfArrays(array1, array2) {}

function showResult() {
  let arr1 = document.getElementById("arr1box").value;
  let row1 = document.getElementById("row1").value;
  let col1 = document.getElementById("col1").value;

  let arr2 = document.getElementById("arr2box").value;
  let row2 = document.getElementById("row2").value;
  let col2 = document.getElementById("col2").value;

  if (row1 != row2 || col1 != col2) {
    document.getElementById("message").innerHTML =
      "Row and Cols should be same";
    return;
  }

  // if (/\D[,]/.test(input)) {
  //   document.getElementById("message").innerHTML = "Enter a valid string.";
  //   return;
  // }

  document.getElementById("message").innerHTML = getSum(arr1, arr2, row1, col1);
}
