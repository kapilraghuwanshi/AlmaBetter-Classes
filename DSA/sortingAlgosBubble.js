// Bubble Sort

// This is our unsorted array
var arr = [234, 43, 55, 63,  5, 6, 235, 547];
// Now pass this array to the bblSort() function
bblSort(arr);
// i no of passes/steps/iteration
// j adjacent comparision
function bblSort(arr){
    // n * n = O(n^2)
    for(var i = 0; i < arr.length; i++){
      // Last i elements are already in place  
      for(var j = 0; j < (arr.length-1 - i); j++){
        // Checking if the item at present iteration 
        // is greater than the next iteration
        if(arr[j] > arr[j+1]){
          // If the condition is true then swap them
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j+1] = temp;
        }
      }
    }
    // Print the sorted array
    console.log(arr);
   }


function swap(a,b){
    var temp = a;
    a = b;
    b = temp;
    return [a,b]
}