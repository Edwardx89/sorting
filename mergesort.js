function mergeSort(array){
if(array.length < 2){
  return array;
}
var splitArray = split(array); //this will split my array into two separate arrays.
var leftArray = splitArray[0]; // set left array
var rightArray = splitArray[1]; // set right array
var result = mergeASortedArray(mergeSort(leftArray),mergeSort(rightArray));
// use recursion to sort the leftArray and the rightArray and then merge. See below for details.
return result
}

function split(array){
  var leftArray = array.slice(0, array.length/2)
  var rightArray = array.slice(array.length/2);
  // console.log('left', leftArray)
  // console.log('right', rightArray)
  return [leftArray, rightArray];
}

function mergeASortedArray(leftArray, rightArray){
console.log('left',leftArray)
console.log('right',rightArray)
  var leftIndex = 0;
  var rightIndex = 0;
  var result = [];

  while(leftIndex < leftArray.length && rightIndex < rightArray.length){
    if(leftArray[leftIndex] < rightArray[rightIndex]){
      result.push(leftArray[leftIndex]);
      leftIndex++
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex++
    }
  }
  if(leftIndex < leftArray.length){
    for(leftIndex; leftIndex < leftArray.length; leftIndex++){
      result.push(leftArray[leftIndex]);
    }
  } else if(rightIndex < rightArray.length){
    for(rightIndex; rightIndex < rightArray.length; rightIndex++){
      result.push(rightArray[rightIndex]);
    }
  }

  return result;

  //[[3,4,5],[6,7,8]]
  //leftIndex.length ==> 3 but indexOf(5) ==> 2
}

mergeSort([1,9,5,6,3]);

// 	Stack 1
// 1	Call mergeSort([1,9,5,6,3])
// 2	split([1,9,5,6,3]) ==> left = [1,9] : right = [5,6,3]
// 3	call mergeASortedArray(mergeSort(leftArray),mergeSort(rightArray))
// 4	==> result = mergeASortedArray(mergeSort([1,9]),mergeSort([5,6,3])


// 	Stack 2
// 1	Call mergeSort([1,9])
// 2	split([1,9]) ==> left = [1] : right = [9]
// 3	call mergeASortedArray(mergeSort(leftArray),mergeSort(rightArray))
// 4	==> result = mergeASortedArray(mergeSort([1]),mergeSort([9]))
// 5	result = mergeASortedArray([1],[9])
// 6	result ==> [1,9]
// 7	End stack 2

// 	GO BACK TO STACK 1 AND EVALUATE THE mergeSort([5,6,3])
// 	Stack 3
// 1	Call mergeSort([5,6,3])
// 2	split([5,6,3]) ==> left = [5] : right = [6,3]
// 3	call mergeASortedArray(mergeSort([5]),mergeSort([6,3])
// 4	==> result = mergeASortedArray(mergeSort([5]),mergeSort([6,3]))
// 5	result = mergeASortedArray([5],mergeSort([6,3]))

// 	Stack 4
// 1	Call mergeSort([6,3])
// 2	split([6,3]) ==> left = [6] : right = [3]
// 3	call mergeASortedArray(mergeSort([6]),mergeSort([3])
// 4	==> result = mergeASortedArray(mergeSort([6]),mergeSort([3]))
// 5	result = mergeASortedArray([6],[3]))
// 6	result ==> [3,6]
// 	End stack 4

// 	Stack 3 (continue)
// 1	Back to Stack 3
// 2	==> result = mergeASortedArray(mergeSort([5]),mergeSort([6,3]))
// 3	==> result = mergeASortedArray([5],[3,6])
// 4	==> result ==> [3,5,6]
// 5	End stack 3

// 	Stack 1 (continue)
// 1	Back to Stack1
// 2	==> result = mergeASortedArray(mergeSort([1,9]),mergeSort([5,6,3])
// 3	==> result = mergeASortedArray([Stack 2], [Stack 3])
// 4	==> result = mergeASortedArray([1,9], [3,5,6])
// 	FINAL RESULT ==> [1,3,5,6,9]

