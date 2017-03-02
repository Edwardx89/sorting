function swap(index1, index2, array){
var greater = array[index1];
array[index1] = array[index2];
array[index2] = greater;
};

function bubbleSort(array){
for(var i = 0; i < array.length; i++){
  if(array[i] > array[i+1]){
    swap(i,i+1, array);
  }
}
return array;
}
