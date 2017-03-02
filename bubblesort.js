function swap(index1, index2, array){
var greater = array[index1];
array[index1] = array[index2];
array[index2] = greater;
};

function bubbleSort(array){
for(var i = 0; i < array.length; i++){
  for(var j = 0; j < array.length-i; j++)
  if(array[j] > array[j+1]){
    swap(j,j+1, array);
  }
}
return array;
}
