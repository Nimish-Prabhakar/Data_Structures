/*

Add 2 integers for a given target and return their index

*/

//Method 1
const checkTwoSum = (array, target) => {
  const indexes = [];
  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = i + 1; j <= array.length - 1; j++) {
      console.log(array[i], array[j]);
      if (array[i] === array[j]) {
        continue;
      }
      if (array[i] + array[j] === target) {
        indexes.push([i, j]);
      }
    }
  }
  return indexes;
};

//Method 2
const checkTwoSum_2 = (array, target) => {
  const numObject = {};
  for (let i = 0; i <= array.length - 1; i++) {
    let thisNum = array[i];
    numObject[thisNum] = i;
  }

  for (let i = 0; i <= array.length - 1; i++) {
    let diff = target - array[i];
    if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
      return [i, numObject[diff]];
    }
  }
};
