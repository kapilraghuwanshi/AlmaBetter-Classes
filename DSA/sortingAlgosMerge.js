

// divide

function mergeSort(arr) {
    const half = arr.length / 2;
    // the base case is array length <=1
    if (arr.length <= 1) {
      return arr;
    }
    let left = arr.splice(0, half); // the first half of the array
    let right = arr;
    return merge(mergeSort(left), mergeSort(right));
  }

// conquer
function merge(left, right) {
    let sortedArr = []; // the sorted elements will go here
    while (left.length && right.length) {
      // insert the smallest element to the sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
    // use spread operator and create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right];
  }

  let arr = [12, 11, 13, 5, 6 ]; 
  let sortedArr = mergeSort(arr);

  console.log(sortedArr);