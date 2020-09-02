// 基数排序
function radixSort(nums) {
  let arr = nums.slice(0);
  const max = Math.max(...arr);
  let digit = `${max}`.length;
  let start = 1;
  let buckets = [];
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
const arr = [1, 10, 100, 1000, 98, 67, 3, 28, 67, 888, 777];
console.log(radixSort(arr));
