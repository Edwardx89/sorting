function mergeSort(array){
 var result = []
 var sortedLeftArray = [];
 var sortedRightArray = [];
 var leftArray = array.slice(0,array.length/2)
 var rightArray = array.slice(array.length/2,array.length);

  if(array.length === 1){
    return array;
  }
  sortedLeftArray = mergeSort(leftArray);
  sortedRightArray = mergeSort(rightArray);


}
