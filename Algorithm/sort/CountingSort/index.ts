/**
 * 计数排序
 *
 * @example
 *
 * countingSort([11, 9, 6, 8, 1, 3, 5, 1, 1, 0, 100]) // [0, 1, 1, 1,  3, 5, 6, 8, 9, 11, 100]
 *
 * @param {Array<number>} arr
 * @returns
 */
function countingSort(arr: number[]) {
  const C = [];
  for (let i = 0; i < arr.length; i++) {
    const j = arr[i];
    C[j] >= 1 ? C[j]++ : (C[j] = 1);
  }

  // console.log(C);
  const D = [];
  for (let j = 0; j < C.length; j++) {
    if (C[j]) {
      while (C[j] > 0) {
        D.push(j);
        C[j]--;
        // console.log(D);
      }
    }
  }
  return D;
}
//
const arr = [11, 9, 6, 8, 1, 3, 5, 1, 1, 0, 100];

console.log("原数组：", arr);
console.log("计数排序后：", countingSort(arr));
