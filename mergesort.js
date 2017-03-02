function mergeSort(array){
 var result = []
 var sortedLeftArray = [];
 var sortedRightArray = [];
 var leftArray = array.slice(0,array.length/2)
 var rightArray = array.slice(array.length/2,array.length);

  if(array.length === 0 || array.length ===1 ){
    return array;
  } else {

  sortedLeftArray = mergeSort(leftArray);
  sortedRightArray = mergeSort(rightArray);
  }


return result;
}

console.log(mergeSort([9,-6,5,-3,1,2]));
