/**
 *
 * 삽입 정렬 (Insert Sort)
 *
 * 각 숫자를 적절한 위치에 삽입하는 정렬 기법이다.
 *
 * 들어갈 위치를 정렬하는데 N번, 선택하는 횟수로 N번이므로,
 *
 * O(N^2)의 시간복잡도를 갖는다.
 *
 */

function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function insert_sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i;
    while (j >= 0 && arr[j] > arr[j + 1]) {
      swap(arr, j, j + 1);
      j--;
    }
  }
  return arr;
}

const result = insert_sort([5, 4, 2, 1, 2, 3, 100]);
console.log(result);
