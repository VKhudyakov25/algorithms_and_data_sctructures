// Create a function which returns true or false based on result of analyze 2 arrays
// Example same([1,2,3,2],[9,1,4,4]) => true

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
console.log(same([5, 2, 3, 2], [9, 36, 4, 4]));
