/**
 * 冒泡排序
 *
 * @example
 *
 * bubbleSort([2,4,8,0,2,6,9,7,3])  // =>  [0, 2, 2, 3, 4, 6, 7, 8, 9]
 *
 * @param {Array<number>} arr
 */
function bubbleSort(arr: number[]) {
  var i, j;
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

var num = [22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70];
console.log("num : ", num);

bubbleSort(num);

console.log("num bubble_sort: ", num);
