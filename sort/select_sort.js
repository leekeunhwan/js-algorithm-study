/**
 *
 * 선택 정렬 (Select Sort)
 *
 * 가장 작은 것을 선택해서 앞으로 보내는 정렬 기법
 *
 * 제일 작은 것을 선택하는데 N번, 앞으로 보내는 데에 N번의 연산으로
 *
 * O(N^2)의 시간복잡도를 갖는다.
 *
 */

function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// 배열을 1개 사용한 경우
function select_sort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("배열인 경우만 정렬 가능합니다.");
  }

  let index;

  for (let i = 0; i < arr.length; i++) {
    min = Number.MAX_SAFE_INTEGER;

    for (let j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        index = j;
      }
    }

    swap(arr, i, index);
  }

  return arr;
}

// 배열을 2개 사용한 경우
function select_sort2(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("배열인 경우만 정렬 가능합니다.");
  }

  const container = [];
  const copyArr = [...arr];

  while (copyArr.length > 0) {
    const minIndex = copyArr.findIndex(
      (element) => element === Math.min.apply(null, copyArr)
    );

    const min = copyArr.splice(minIndex, 1)[0];
    container.push(min);
  }

  return container;
}

select_sort([5, 4, 2, 1, 2, 3, 100]);
