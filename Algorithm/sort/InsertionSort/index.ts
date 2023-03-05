/**
 * 插入排序
 *
 * @example
 *
 * insertionSort([22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]) // => [3,  5,  9, 22, 32, 34, 35, 37, 50, 55, 64, 70, 82, 89]
 *
 * @param {Array<number>} arr
 */
function insertionSort(arr: number[]) {
  let min;
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    // swap two value without temp variable
    if (min !== i) {
      arr[min] = arr[min] ^ arr[i];
      arr[i] = arr[min] ^ arr[i];
      arr[min] = arr[min] ^ arr[i];
    }
  }
}

var num = [22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70];
console.log("num : ", num);

insertionSort(num);

console.log("num bubble_sort: ", num);
