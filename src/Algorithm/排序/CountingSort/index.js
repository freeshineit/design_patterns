function countingSort(arr) {
  const C = [];
  for (let i = 0; i < arr.length; i++) {
    const j = arr[i];
    C[j] >= 1 ? C[j]++ : (C[j] = 1);
  }

  console.log(C);
  const D = [];
  for (let j = 0; j < C.length; j++) {
    if (C[j]) {
      while (C[j] > 0) {
        D.push(j);
        C[j]--;
        console.log(D);
      }
    }
  }
  return D;
}
const arr = [11, 9, 6, 8, 1, 3, 5, 1, 1, 0, 100];
console.log(arr);
console.log(countingSort(arr));
