/**
 * 基数排序
 *
 * @example
 *
 * radixSort([1, 10, 100, 1000, 98, 67, 3, 28, 67, 888, 777]) // => [1, 3, 10, 28, 67, 67, 98, 100,777, 888, 1000]
 *
 * @param {Array<number>} nums
 * @returns {Array<number>}
 */
function radixSort(nums: number[]) {
  let arr = nums.slice(0);

  const max = Math.max(...arr);
  let digit = `${max}`.length;
  let start = 1;
  let buckets: Array<Array<number>> = [];

  while (digit > 0) {
    start *= 10;
    for (let i = 0; i < arr.length; i++) {
      const index = arr[i] % start;
      !buckets[index] && (buckets[index] = []);
      buckets[index].push(arr[i]);
    }

    arr = [];

    for (let i = 0; i < buckets.length; i++) {
      buckets[i] && (arr = arr.concat(buckets[i]));
    }
    buckets = [];
    digit--;
  }

  return arr;
}
const arr1 = [1, 10, 100, 1000, 98, 67, 3, 28, 67, 888, 777];

console.log("原数据：", arr1);

console.log("基数排序后：", radixSort(arr1));
