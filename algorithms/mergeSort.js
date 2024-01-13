/**
 * 
 * @param {number[]} arr 
 */
const mergeSort = arr => {
  if (arr.length === 1) {
    return arr;
  }

  let start = 0;
  let end = arr.length - 1; 
  let mid = Math.floor(end / 2);
  

  const leftSideSortedArr = mergeSort(arr.slice(start, mid + 1));
  const rightSideSortedArr = mergeSort(arr.slice(mid + 1));

  let leftIdx = 0;
  let rightIdx = 0;
  const currSortedArr = [];

  while (leftIdx < leftSideSortedArr.length && rightIdx < rightSideSortedArr.length) {
    if (leftSideSortedArr[leftIdx] < rightSideSortedArr[rightIdx]) {
      currSortedArr.push(leftSideSortedArr[leftIdx]);
      leftIdx++;
    } else {
      currSortedArr.push(rightSideSortedArr[rightIdx]);
      rightIdx++;
    }
  }

  const [remainingArrIdx, remainingArr] = leftIdx < leftSideSortedArr.length ? [leftIdx, leftSideSortedArr] : [rightIdx, rightSideSortedArr];

  for (let i = remainingArrIdx; i<remainingArr.length; i++) {
    currSortedArr.push(remainingArr[i]);
  };

  return currSortedArr;
}

const arr = [1, 5, 3, 2, 9];
console.log(mergeSort(arr));



