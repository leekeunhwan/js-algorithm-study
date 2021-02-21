/**
 *
 * 퀵 정렬 (Quick  Sort)
 *
 * 피벗을 기준으로 큰 값과 작은 값을 서로 교체하는 정렬 기법
 *
 * 값을 교체하는데에 N번, 엇갈린 경우 교체 이후에 원소가 반으로 나누어지므로,
 *
 * 전체 원소를 나누는데에 평균적으로 logN번이 소용되며, 평균적으로 O(NlogN)의 시간 복잡도를 가진다.
 *
 */

function quick_sort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = [arr[0]];
  const head = [];
  const tail = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      head.push(arr[i]);
      continue;
    }

    if (arr[i] > pivot) {
      tail.push(arr[i]);
      continue;
    }

    pivot.push(arr[i]);
  }

  return quick_sort(head).concat(pivot, quick_sort(tail));
}

console.log(quick_sort([3, 6, 1, 1, 2, 7]));
