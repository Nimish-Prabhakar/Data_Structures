/*

Merge a Sorted Array

*/

const mergeSortedArray = (array1, array2) => {
  const newSortedArray = [];
  let array1Value = array1[0];
  let array2Value = array2[0];
  let i = 1;
  let j = 1;

  while (array1Value || array2Value) {
    if (!array2Value || array1Value < array2Value) {
      newSortedArray.push(array1Value);
      array1Value = array1[i];
      i++;
    } else {
      newSortedArray.push(array2Value);
      array2Value = array2[j];
      j++;
    }
  }

  return newSortedArray;
};
